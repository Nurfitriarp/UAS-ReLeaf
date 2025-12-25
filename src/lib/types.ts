export interface User {
  name: string;
  email: string;
  avatarUrl: string;
}

export interface Psychiatrist {
  id: string;
  name: string;
  specialty: string;
  bio: string;
  avatarUrl: string;
  avatarHint: string;
  availability: string[];
  location: string;
  rating: number;
  reviews: number;
}

export interface Article {
  id: string;
  title: string;
  excerpt: string;
  imageUrl: string;
  imageHint: string;
  author: string;
  date: string;
  content: string;
}

export interface Community {
  id:string;
  name: string;
  description: string;
  memberCount: number;
  imageUrl: string;
  imageHint: string;
}
