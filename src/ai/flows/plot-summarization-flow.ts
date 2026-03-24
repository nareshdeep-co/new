'use server';
/**
 * @fileOverview A Genkit flow for generating concise plot summaries of movies.
 *
 * - getPlotSummary - A function that generates a plot summary for a given movie title.
 * - PlotSummarizationInput - The input type for the getPlotSummary function.
 * - PlotSummarizationOutput - The return type for the getPlotSummary function.
 */

import {ai} from '@/ai/genkit';
import {z} from 'genkit';

const PlotSummarizationInputSchema = z.object({
  movieTitle: z
    .string()
    .describe('The title of the movie for which to generate a plot summary.')
});
export type PlotSummarizationInput = z.infer<typeof PlotSummarizationInputSchema>;

const PlotSummarizationOutputSchema = z.object({
  summary: z
    .string()
    .describe('A concise plot summary of the movie, avoiding major spoilers.')
});
export type PlotSummarizationOutput = z.infer<typeof PlotSummarizationOutputSchema>;

export async function getPlotSummary(
  input: PlotSummarizationInput
): Promise<PlotSummarizationOutput> {
  return plotSummarizationFlow(input);
}

const prompt = ai.definePrompt({
  name: 'plotSummarizationPrompt',
  input: {schema: PlotSummarizationInputSchema},
  output: {schema: PlotSummarizationOutputSchema},
  prompt: `You are a helpful AI assistant that provides concise movie plot summaries.

Generate a concise plot summary for the movie titled "{{{movieTitle}}}".
The summary should be brief, easy to understand, and must avoid revealing any major spoilers.`
});

const plotSummarizationFlow = ai.defineFlow(
  {
    name: 'plotSummarizationFlow',
    inputSchema: PlotSummarizationInputSchema,
    outputSchema: PlotSummarizationOutputSchema
  },
  async input => {
    const {output} = await prompt(input);
    return output!;
  }
);
