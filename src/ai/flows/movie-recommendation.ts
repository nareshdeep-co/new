'use server';
/**
 * @fileOverview An AI agent for generating personalized movie recommendations.
 *
 * - getMovieRecommendations - A function that handles the movie recommendation process.
 * - MovieRecommendationInput - The input type for the getMovieRecommendations function.
 * - MovieRecommendationOutput - The return type for the getMovieRecommendations function.
 */

import { ai } from '@/ai/genkit';
import { z } from 'genkit';

const MovieRecommendationInputSchema = z.object({
  preferences: z
    .string()
    .describe(
      'A description of the user\'s movie preferences or current mood (e.g., "family-friendly animated movie," or "thrilling action film from the 80s").'
    ),
});
export type MovieRecommendationInput = z.infer<
  typeof MovieRecommendationInputSchema
>;

const MovieRecommendationOutputSchema = z.array(
  z.object({
    title: z.string().describe('The title of the recommended movie.'),
    genre: z.string().describe('The genre(s) of the movie.'),
    year: z.number().describe('The release year of the movie.'),
    plotSummary: z.string().describe('A brief summary of the movie\'s plot.'),
    reasonForRecommendation: z
      .string()
      .describe(
        'A short explanation of why this movie is recommended based on the user\'s preferences.'
      ),
  })
);
export type MovieRecommendationOutput = z.infer<
  typeof MovieRecommendationOutputSchema
>;

export async function getMovieRecommendations(
  input: MovieRecommendationInput
): Promise<MovieRecommendationOutput> {
  return movieRecommendationFlow(input);
}

const movieRecommendationPrompt = ai.definePrompt({
  name: 'movieRecommendationPrompt',
  input: { schema: MovieRecommendationInputSchema },
  output: { schema: MovieRecommendationOutputSchema },
  prompt: `You are an expert movie recommender. Your task is to suggest movies based on a user's preferences or mood.

Based on the following preferences, provide 2-3 movie recommendations. For each recommendation, include the title, genre, release year, a brief plot summary, and a concise reason for the recommendation.

User Preferences: {{{preferences}}}

Please respond with a JSON array of movie objects, strictly adhering to the following structure and type definitions:

`,
});

const movieRecommendationFlow = ai.defineFlow(
  {
    name: 'movieRecommendationFlow',
    inputSchema: MovieRecommendationInputSchema,
    outputSchema: MovieRecommendationOutputSchema,
  },
  async (input) => {
    const { output } = await movieRecommendationPrompt(input);
    return output!;
  }
);
