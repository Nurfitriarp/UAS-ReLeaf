import Link from 'next/link';
import Image from 'next/image';
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from '@/components/ui/card';
import { articles } from '@/lib/data';
import type { Article } from '@/lib/types';
import { ArrowRight } from 'lucide-react';

function ArticleCard({ article }: { article: Article }) {
  return (
    <Card className="overflow-hidden flex flex-col">
      <div className="relative w-full h-48">
        <Image
          src={article.imageUrl}
          alt={article.title}
          layout="fill"
          objectFit="cover"
          data-ai-hint={article.imageHint}
        />
      </div>
      <CardHeader>
        <CardTitle className="font-headline">{article.title}</CardTitle>
        <CardDescription>{article.author} - {new Date(article.date).toLocaleDateString()}</CardDescription>
      </CardHeader>
      <CardContent className="flex-grow">
        <p className="text-sm text-muted-foreground">{article.excerpt}</p>
      </CardContent>
      <CardFooter>
        <Link href={`/dashboard/articles/${article.id}`} className="flex items-center text-sm font-semibold text-primary hover:underline">
          Read more <ArrowRight className="ml-2 h-4 w-4" />
        </Link>
      </CardFooter>
    </Card>
  );
}


export default function ArticlesPage() {
  return (
    <div className="container mx-auto px-4 py-8">
      <div className="mb-8 text-center">
        <h1 className="text-4xl font-bold font-headline">Mental Health Articles</h1>
        <p className="text-muted-foreground mt-2">
          Informative articles to support your mental well-being.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {articles.map((article) => (
          <ArticleCard key={article.id} article={article} />
        ))}
      </div>
    </div>
  );
}
