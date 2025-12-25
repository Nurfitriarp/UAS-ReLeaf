'use server';
/**
 * @fileOverview An AI-powered psychiatrist matching flow.
 *
 * - matchPsychiatrist - A function that handles the psychiatrist matching process.
 * - MatchPsychiatristInput - The input type for the matchPsychiatrist function.
 * - MatchPsychiatristOutput - The return type for the matchPsychiatrist function.
 */

import {ai} from '@/ai/genkit';
import {z} from 'genkit';

const MatchPsychiatristInputSchema = z.object({
  patientProfile: z.string().describe('The profile of the patient, including their mental health history, preferences, and needs.'),
  psychiatristProfiles: z.string().describe('A list of psychiatrist profiles to choose from.'),
});
export type MatchPsychiatristInput = z.infer<typeof MatchPsychiatristInputSchema>;

const MatchPsychiatristOutputSchema = z.object({
  matchedPsychiatrist: z.string().describe('The psychiatrist who is the best match for the patient based on their profile and preferences.'),
  reason: z.string().describe('The reason why the psychiatrist was chosen as the best match.'),
});
export type MatchPsychiatristOutput = z.infer<typeof MatchPsychiatristOutputSchema>;

export async function matchPsychiatrist(input: MatchPsychiatristInput): Promise<MatchPsychiatristOutput> {
  return matchPsychiatristFlow(input);
}

const prompt = ai.definePrompt({
  name: 'matchPsychiatristPrompt',
  input: {schema: MatchPsychiatristInputSchema},
  output: {schema: MatchPsychiatristOutputSchema},
  prompt: `You are an AI assistant specializing in matching patients with the most suitable psychiatrists.

  Given the patient's profile and a list of psychiatrist profiles, analyze the information and determine the best psychiatrist match for the patient.

  Patient Profile: {{{patientProfile}}}
  Psychiatrist Profiles: {{{psychiatristProfiles}}}

  Consider factors such as the patient's mental health history, preferences, needs, and the psychiatrist's specialization, experience, and approach to treatment.
  Explain the reason for your choice.

  Return the name of the matched psychiatrist and the reason for the match.
  `,
});

const matchPsychiatristFlow = ai.defineFlow(
  {
    name: 'matchPsychiatristFlow',
    inputSchema: MatchPsychiatristInputSchema,
    outputSchema: MatchPsychiatristOutputSchema,
  },
  async input => {
    const {output} = await prompt(input);
    return output!;
  }
);
