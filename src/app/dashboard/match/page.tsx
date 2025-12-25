import { MatchForm } from './match-form';

export default function MatchPage() {
  return (
    <div className="container mx-auto px-4 py-8">
      <div className="mb-8 text-center">
        <h1 className="text-4xl font-bold font-headline">AI-Powered Psychiatrist Matching</h1>
        <p className="text-muted-foreground mt-2 max-w-2xl mx-auto">
          Describe your needs and preferences, and our AI will analyze psychiatrist profiles to suggest the best match for you.
        </p>
      </div>
      <MatchForm />
    </div>
  );
}
