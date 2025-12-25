'use client';

import { useState } from 'react';
import type { FormEvent } from 'react';
import { Bot, Loader2, Sparkles, Star } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Label } from '@/components/ui/label';
import { Textarea } from '@/components/ui/textarea';
import { useToast } from '@/hooks/use-toast';
import type { MatchPsychiatristOutput } from '@/ai/flows/ai-powered-psychiatrist-matching';
import { matchPsychiatrist } from '@/ai/flows/ai-powered-psychiatrist-matching';
import { psychiatrists } from '@/lib/data';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import Link from 'next/link';

export function MatchForm() {
  const [patientProfile, setPatientProfile] = useState('');
  const [loading, setLoading] = useState(false);
  const [result, setResult] = useState<MatchPsychiatristOutput | null>(null);
  const { toast } = useToast();

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    if (!patientProfile.trim()) {
      toast({
        title: 'Input Required',
        description: 'Please describe what you are looking for in a psychiatrist.',
        variant: 'destructive',
      });
      return;
    }

    setLoading(true);
    setResult(null);

    try {
      // Convert psychiatrist profiles to a string for the AI model
      const psychiatristProfiles = psychiatrists
        .map(
          (p) =>
            `Name: ${p.name}, Specialty: ${p.specialty}, Bio: ${p.bio}`
        )
        .join('\n---\n');
      
      const response = await matchPsychiatrist({
        patientProfile,
        psychiatristProfiles,
      });

      setResult(response);
    } catch (error) {
      console.error('AI Matching Error:', error);
      toast({
        title: 'An Error Occurred',
        description: 'Failed to get a match. Please try again later.',
        variant: 'destructive',
      });
    } finally {
      setLoading(false);
    }
  };

  const matchedPsychiatrist = result ? psychiatrists.find(p => p.name === result.matchedPsychiatrist) : null;

  return (
    <div className="max-w-4xl mx-auto">
      <Card className="shadow-lg">
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <Bot />
            Your Matching Assistant
          </CardTitle>
          <CardDescription>
            The more detail you provide, the better the match will be.
          </CardDescription>
        </CardHeader>
        <CardContent>
          <form onSubmit={handleSubmit} className="space-y-6">
            <div className="space-y-2">
              <Label htmlFor="patient-profile">What are you looking for?</Label>
              <Textarea
                id="patient-profile"
                placeholder="e.g., 'I'm a college student struggling with anxiety and procrastination. I'd prefer a female psychiatrist who uses CBT and is available on weekends.'"
                value={patientProfile}
                onChange={(e) => setPatientProfile(e.target.value)}
                rows={5}
                className="text-base"
              />
            </div>
            <div className="flex justify-end">
              <Button type="submit" disabled={loading}>
                {loading ? (
                  <>
                    <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                    Finding Your Match...
                  </>
                ) : (
                  <>
                    <Sparkles className="mr-2 h-4 w-4" />
                    Find My Match
                  </>
                )}
              </Button>
            </div>
          </form>
        </CardContent>
      </Card>

      {loading && (
        <div className="text-center mt-8">
          <Loader2 className="mx-auto h-8 w-8 animate-spin text-primary" />
          <p className="mt-2 text-muted-foreground">Analyzing profiles...</p>
        </div>
      )}

      {result && matchedPsychiatrist && (
        <div className="mt-8">
            <h2 className="text-2xl font-bold text-center mb-4 font-headline">We Found a Match For You!</h2>
            <Card className="border-primary border-2 shadow-xl">
                <CardHeader className="text-center items-center bg-secondary/50">
                    <Avatar className="w-24 h-24 mb-4 border-2 border-primary">
                        <AvatarImage src={matchedPsychiatrist.avatarUrl} alt={matchedPsychiatrist.name} data-ai-hint={matchedPsychiatrist.avatarHint} />
                        <AvatarFallback>{matchedPsychiatrist.name.charAt(0)}</AvatarFallback>
                    </Avatar>
                    <CardTitle>{matchedPsychiatrist.name}</CardTitle>
                    <CardDescription>{matchedPsychiatrist.specialty}</CardDescription>
                    <div className="flex items-center gap-1 pt-2">
                        <Star className="w-4 h-4 fill-yellow-400 text-yellow-400" />
                        <span className="text-sm text-muted-foreground">{matchedPsychiatrist.rating} ({matchedPsychiatrist.reviews} reviews)</span>
                    </div>
                </CardHeader>
                <CardContent className="p-6">
                    <h3 className="font-semibold mb-2">Why it's a good match:</h3>
                    <blockquote className="border-l-2 border-primary pl-4 italic text-muted-foreground">
                        {result.reason}
                    </blockquote>
                    <div className="flex justify-center mt-6">
                        <Button asChild size="lg">
                            <Link href={`/dashboard/psychiatrists/${matchedPsychiatrist.id}`}>
                                View Full Profile & Book
                            </Link>
                        </Button>
                    </div>
                </CardContent>
            </Card>
        </div>
      )}
    </div>
  );
}
