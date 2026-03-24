'use server';
/**
 * @fileOverview A Genkit flow for answering specific movie-related questions.
 *
 * - movieQuestionAnswering - A function that handles answering movie questions.
 * - MovieQuestionInput - The input type for the movieQuestionAnswering function.
 * - MovieQuestionOutput - The return type for the movieQuestionAnswering function.
 */

import {ai} from '@/ai/genkit';
import {z} from 'genkit';

const MovieQuestionInputSchema = z.object({
  question: z.string().describe('The user\'s question about a movie, e.g., "Who directed Inception?" or "What is the runtime of Pulp Fiction?'),
});
export type MovieQuestionInput = z.infer<typeof MovieQuestionInputSchema>;

const MovieQuestionOutputSchema = z.object({
  answer: z.string().describe('The AI chatbot\'s accurate answer to the movie question.'),
});
export type MovieQuestionOutput = z.infer<typeof MovieQuestionOutputSchema>;

// Mock Tool for getting movie details
const getMovieDetails = ai.defineTool(
  {
    name: 'getMovieDetails',
    description: 'Retrieves detailed information about a movie by its title, including director, runtime, plot, release date, cast, and genres.',
    inputSchema: z.object({
      title: z.string().describe('The title of the movie.'),
    }),
    outputSchema: z.object({
      title: z.string().optional(),
      director: z.string().optional(),
      runtime: z.string().optional(),
      plot: z.string().optional(),
      releaseDate: z.string().optional(),
      cast: z.array(z.string()).optional(),
      genres: z.array(z.string()).optional(),
      found: z.boolean().describe('Whether the movie details were successfully found.').default(false),
    }).describe('Detailed information about the requested movie.'),
  },
  async (input) => {
    const mockMovieData: { [key: string]: Omit<z.infer<typeof getMovieDetails.outputSchema>, 'found'> } = {
      'inception': {
        title: 'Inception',
        director: 'Christopher Nolan',
        runtime: '2h 28m',
        plot: 'A thief who steals corporate secrets through the use of dream-sharing technology is given the inverse task of planting an idea into the mind of a C.E.O.',
        releaseDate: '2010-07-16',
        cast: ['Leonardo DiCaprio', 'Joseph Gordon-Levitt', 'Elliot Page'],
        genres: ['Action', 'Sci-Fi', 'Thriller'],
      },
      'rrr': {
        title: 'RRR',
        director: 'S. S. Rajamouli',
        runtime: '3h 7m',
        plot: 'A fictitious story about two legendary revolutionaries and their journey away from home before they started fighting for their country in 1920s.',
        releaseDate: '2022-03-25',
        cast: ['N. T. Rama Rao Jr.', 'Ram Charan', 'Ajay Devgn'],
        genres: ['Action', 'Drama'],
      },
      'dangal': {
        title: 'Dangal',
        director: 'Nitesh Tiwari',
        runtime: '2h 41m',
        plot: 'Former wrestler Mahavir Singh Phogat and his two wrestler daughters struggle towards glory at the Commonwealth Games in the face of societal oppression.',
        releaseDate: '2016-12-21',
        cast: ['Aamir Khan', 'Sakshi Tanwar', 'Fatima Sana Shaikh'],
        genres: ['Action', 'Biography', 'Drama'],
      },
    };

    const normalizedTitle = input.title.toLowerCase().trim();
    if (mockMovieData[normalizedTitle]) {
      return { ...mockMovieData[normalizedTitle], found: true };
    }
    return { found: false }; 
  }
);


const movieQuestionPrompt = ai.definePrompt({
  name: 'movieQuestionPrompt',
  input: { schema: MovieQuestionInputSchema },
  output: { schema: MovieQuestionOutputSchema },
  tools: [getMovieDetails],
  system: `You are a helpful AI chatbot assistant named CineVerse AI. Your purpose is to answer specific movie-related questions accurately for both Hollywood and Bollywood films.
  
  When a user asks a question about a movie, your primary task is to identify the movie title and the specific information requested.
  
  **Instructions for using the 'getMovieDetails' tool:**
  1.  If the question clearly indicates a need for movie details, use the 'getMovieDetails' tool.
  2.  Carefully extract the full and accurate movie title.
  3.  Formulate a concise and accurate answer based *only* on the information provided by the tool.
  
  **Examples:**
  - User: "Who directed RRR?"
    Assistant: "S. S. Rajamouli directed RRR."
  - User: "What is the plot of Dangal?"
    Assistant: "Dangal follows former wrestler Mahavir Singh Phogat and his two daughters as they struggle for glory at the Commonwealth Games against societal odds."
  `,
  prompt: `{{{question}}}`
});

const movieQuestionAnsweringFlow = ai.defineFlow(
  {
    name: 'movieQuestionAnsweringFlow',
    inputSchema: MovieQuestionInputSchema,
    outputSchema: MovieQuestionOutputSchema,
  },
  async (input) => {
    const { output } = await movieQuestionPrompt(input);
    return output!;
  }
);

export async function movieQuestionAnswering(input: MovieQuestionInput): Promise<MovieQuestionOutput> {
  return movieQuestionAnsweringFlow(input);
}
