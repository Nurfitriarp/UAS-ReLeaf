import Image from 'next/image';
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { communities } from '@/lib/data';
import type { Community } from '@/lib/types';
import { Users } from 'lucide-react';

function CommunityCard({ community }: { community: Community }) {
  return (
    <Card className="flex flex-col md:flex-row items-center p-4 gap-6">
      <div className="relative w-full md:w-48 h-48 md:h-full flex-shrink-0 rounded-lg overflow-hidden">
        <Image
          src={community.imageUrl}
          alt={community.name}
          layout="fill"
          objectFit="cover"
          data-ai-hint={community.imageHint}
        />
      </div>
      <div className="flex flex-col flex-grow">
        <CardHeader className="p-0">
          <CardTitle className="font-headline">{community.name}</CardTitle>
          <div className="flex items-center text-sm text-muted-foreground pt-1">
            <Users className="h-4 w-4 mr-1" />
            <span>{community.memberCount} members</span>
          </div>
        </CardHeader>
        <CardContent className="p-0 pt-4">
          <p className="text-sm text-muted-foreground">{community.description}</p>
        </CardContent>
        <CardFooter className="p-0 pt-6">
          <Button>Join Community</Button>
        </CardFooter>
      </div>
    </Card>
  );
}

export default function CommunityPage() {
  return (
    <div className="container mx-auto px-4 py-8">
      <div className="mb-8 text-center">
        <h1 className="text-4xl font-bold font-headline">Find Your Community</h1>
        <p className="text-muted-foreground mt-2">
          Connect with others who share your experiences.
        </p>
      </div>

      <div className="space-y-6 max-w-4xl mx-auto">
        {communities.map((community) => (
          <CommunityCard key={community.id} community={community} />
        ))}
      </div>
    </div>
  );
}
