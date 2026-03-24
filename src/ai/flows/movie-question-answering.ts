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
// In a real application, this would call an external movie API.
// For now, it returns mock data for demonstration.
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
      'pulp fiction': {
        title: 'Pulp Fiction',
        director: 'Quentin Tarantino',
        runtime: '2h 34m',
        plot: 'The lives of two mob hitmen, a boxer, a gangster and his wife, and a pair of diner bandits intertwine in four tales of violence and redemption.',
        releaseDate: '1994-10-14',
        cast: ['John Travolta', 'Uma Thurman', 'Samuel L. Jackson'],
        genres: ['Crime', 'Drama'],
      },
      'the matrix': {
        title: 'The Matrix',
        director: 'Lana Wachowski, Lilly Wachowski',
        runtime: '2h 16m',
        plot: 'A computer hacker learns from mysterious rebels about the true nature of his reality and his role in the war against its controllers.',
        releaseDate: '1999-03-31',
        cast: ['Keanu Reeves', 'Laurence Fishburne', 'Carrie-Anne Moss'],
        genres: ['Action', 'Sci-Fi'],
      },
    };

    const normalizedTitle = input.title.toLowerCase().trim();
    if (mockMovieData[normalizedTitle]) {
      return { ...mockMovieData[normalizedTitle], found: true };
    }
    return { found: false }; // Indicate that the movie was not found
  }
);


const movieQuestionPrompt = ai.definePrompt({
  name: 'movieQuestionPrompt',
  input: { schema: MovieQuestionInputSchema },
  output: { schema: MovieQuestionOutputSchema },
  tools: [getMovieDetails],
  system: `You are a helpful AI chatbot assistant named CineWave. Your purpose is to answer specific movie-related questions accurately.
  
  When a user asks a question about a movie, your primary task is to identify the movie title and the specific information requested (e.g., director, runtime, plot, cast, release date, genres).
  
  **Instructions for using the 'getMovieDetails' tool:**
  1.  If the question clearly indicates a need for movie details (e.g., asking "who directed...", "what is the runtime...", "tell me about...", "what's the cast of..."), use the 'getMovieDetails' tool.
  2.  Carefully extract the full and accurate movie title from the user's question to pass as the 'title' argument to the 'getMovieDetails' tool.
  3.  After receiving the details from the tool, formulate a concise and accurate answer based *only* on the information provided by the tool.
  4.  If the tool returns no details for the movie (i.e., 'found' is false or fields are missing), politely state that you could not find the information for that movie.
  
  **Examples:**
  - User: "Who directed Inception?"
    Assistant: "Christopher Nolan directed Inception."
  - User: "What is the runtime of Pulp Fiction?"
    Assistant: "The runtime of Pulp Fiction is 2h 34m."
  - User: "Tell me about The Matrix."
    Assistant: "The Matrix is a 1999 sci-fi action film directed by Lana Wachowski and Lilly Wachowski. Its plot involves a computer hacker who learns from mysterious rebels about the true nature of his reality and his role in the war against its controllers. It has a runtime of 2h 16m and stars Keanu Reeves, Laurence Fishburne, and Carrie-Anne Moss."
  - User: "What is the plot of a movie called \"NonExistentMovie\"?"
    Assistant: "I'm sorry, I couldn't find details for a movie called NonExistentMovie."
  - User: "What genres is Inception?"
    Assistant: "Inception is an Action, Sci-Fi, Thriller film."
  - User: "When was Pulp Fiction released?"
    Assistant: "Pulp Fiction was released on 1994-10-14."
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
