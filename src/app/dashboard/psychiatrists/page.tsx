import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from '@/components/ui/card';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { psychiatrists } from '@/lib/data';
import type { Psychiatrist } from '@/lib/types';
import { Input } from '@/components/ui/input';
import { Search, Star } from 'lucide-react';
import Link from 'next/link';

function PsychiatristCard({ psychiatrist }: { psychiatrist: Psychiatrist }) {
  return (
    <Card className="flex flex-col">
      <CardHeader className="items-center text-center">
        <Avatar className="h-24 w-24 mb-4">
          <AvatarImage src={psychiatrist.avatarUrl} alt={psychiatrist.name} data-ai-hint={psychiatrist.avatarHint} />
          <AvatarFallback>{psychiatrist.name.charAt(0)}</AvatarFallback>
        </Avatar>
        <CardTitle>{psychiatrist.name}</CardTitle>
        <CardDescription>{psychiatrist.specialty}</CardDescription>
        <div className="flex items-center gap-1 pt-2">
            <Star className="w-4 h-4 fill-yellow-400 text-yellow-400" />
            <span className="text-sm text-muted-foreground">{psychiatrist.rating} ({psychiatrist.reviews} reviews)</span>
        </div>
      </CardHeader>
      <CardContent className="flex-grow">
        <p className="text-sm text-muted-foreground text-center">
          {psychiatrist.bio.substring(0, 100)}...
        </p>
      </CardContent>
      <CardFooter className="flex justify-center">
        <Button asChild>
            <Link href={`/dashboard/psychiatrists/${psychiatrist.id}`}>View Profile</Link>
        </Button>
      </CardFooter>
    </Card>
  );
}

export default function PsychiatristsPage() {
  return (
    <div className="container mx-auto px-4 py-8">
      <div className="mb-8 text-center">
        <h1 className="text-4xl font-bold font-headline">Find Your Psychiatrist</h1>
        <p className="text-muted-foreground mt-2">
          Connect with professionals who can help you on your journey.
        </p>
      </div>

      <div className="mb-8 max-w-lg mx-auto">
        <div className="relative">
          <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-5 w-5 text-muted-foreground" />
          <Input placeholder="Search by name or specialty..." className="pl-10" />
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
        {psychiatrists.map((p) => (
          <PsychiatristCard key={p.id} psychiatrist={p} />
        ))}
      </div>
    </div>
  );
}
