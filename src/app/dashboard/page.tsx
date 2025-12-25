'use client';

import Link from 'next/link';
import {
  ArrowRight,
  Bot,
  BookOpen,
  HeartHandshake,
  Users,
} from 'lucide-react';
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { useUser } from '@/firebase';

export default function DashboardPage() {
  const { user } = useUser();

  const featureCards = [
    {
      title: 'Find a Psychiatrist',
      description: 'Browse profiles and find the right support for you.',
      icon: Users,
      href: '/dashboard/psychiatrists',
    },
    {
      title: 'AI-Powered Match',
      description: 'Let our AI help you find the best psychiatrist match.',
      icon: Bot,
      href: '/dashboard/match',
    },
    {
      title: 'Read Articles',
      description: 'Explore our library of mental health resources.',
      icon: BookOpen,
      href: '/dashboard/articles',
    },
    {
      title: 'Join a Community',
      description: 'Connect with others in a safe and supportive space.',
      icon: HeartHandshake,
      href: '/dashboard/community',
    },
  ];

  return (
    <div className="flex w-full flex-col">
      <div className="space-y-2 mb-8">
        <h1 className="text-3xl font-bold tracking-tight font-headline">
          Welcome back, {user?.displayName?.split(' ')[0] || 'User'}
        </h1>
        <p className="text-muted-foreground">
          Here's your mental wellness dashboard.
        </p>
      </div>
      <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
        {featureCards.map((feature) => (
          <Card key={feature.title} className="hover:shadow-md transition-shadow">
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">
                {feature.title}
              </CardTitle>
              <feature.icon className="h-4 w-4 text-muted-foreground" />
            </CardHeader>
            <CardContent>
              <p className="text-xs text-muted-foreground mb-4">
                {feature.description}
              </p>
              <Button asChild size="sm" variant="outline">
                <Link href={feature.href}>
                  Go <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </Button>
            </CardContent>
          </Card>
        ))}
      </div>
       <div className="mt-8">
         <Card>
            <CardHeader>
                <CardTitle>Your Next Appointment</CardTitle>
                <CardDescription>You have an upcoming session.</CardDescription>
            </CardHeader>
            <CardContent>
                <div className="flex items-center justify-between p-4 bg-secondary rounded-lg">
                    <div>
                        <p className="font-semibold">Dr. Evelyn Reed</p>
                        <p className="text-sm text-muted-foreground">Cognitive Behavioral Therapy</p>
                    </div>
                    <div>
                        <p className="font-semibold">Tomorrow</p>
                        <p className="text-sm text-muted-foreground">10:00 AM</p>
                    </div>
                    <Button>View Details</Button>
                </div>
            </CardContent>
         </Card>
       </div>
    </div>
  );
}
