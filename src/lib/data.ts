import type { Psychiatrist, Article, Community } from './types';
import { PlaceHolderImages } from './placeholder-images';

const getImage = (id: string) => PlaceHolderImages.find((img) => img.id === id)?.imageUrl || '';
const getHint = (id: string) => PlaceHolderImages.find((img) => img.id === id)?.imageHint || '';

export const psychiatrists: Psychiatrist[] = [
  {
    id: '1',
    name: 'Dr. Evelyn Reed',
    specialty: 'Cognitive Behavioral Therapy (CBT)',
    bio: 'Dr. Reed specializes in helping patients with anxiety and depression through evidence-based CBT techniques. With over 15 years of experience, she is dedicated to empowering her patients.',
    avatarUrl: getImage('psychiatrist-1'),
    avatarHint: getHint('psychiatrist-1'),
    availability: ['Monday', 'Wednesday', 'Friday'],
    location: 'New York, NY',
    rating: 4.9,
    reviews: 124
  },
  {
    id: '2',
    name: 'Dr. Samuel Chen',
    specialty: 'Adolescent Psychology',
    bio: 'Dr. Chen focuses on the unique challenges faced by teenagers and young adults. He provides a safe and understanding environment for adolescents to explore their feelings and develop coping strategies.',
    avatarUrl: getImage('psychiatrist-2'),
    avatarHint: getHint('psychiatrist-2'),
    availability: ['Tuesday', 'Thursday'],
    location: 'San Francisco, CA',
    rating: 4.8,
    reviews: 98
  },
  {
    id: '3',
    name: 'Dr. Anika Sharma',
    specialty: 'Trauma and PTSD',
    bio: 'Dr. Sharma has extensive training in trauma-informed care and works with individuals who have experienced significant life stressors. Her approach is gentle, patient, and focused on healing.',
    avatarUrl: getImage('psychiatrist-3'),
    avatarHint: getHint('psychiatrist-3'),
    availability: ['Monday', 'Tuesday', 'Thursday'],
    location: 'Chicago, IL',
    rating: 4.9,
    reviews: 150
  },
  {
    id: '4',
    name: 'Dr. Marcus Thorne',
    specialty: 'Mindfulness & Stress Reduction',
    bio: 'Dr. Thorne integrates mindfulness practices into his therapy sessions to help patients manage stress, improve focus, and cultivate a greater sense of well-being. He leads workshops on mindfulness meditation.',
    avatarUrl: getImage('psychiatrist-4'),
    avatarHint: getHint('psychiatrist-4'),
    availability: ['Wednesday', 'Friday'],
    location: 'Austin, TX',
    rating: 4.7,
    reviews: 85
  },
];

export const articles: Article[] = [
  {
    id: '1',
    title: 'The Power of Mindfulness in Daily Life',
    excerpt: 'Learn how incorporating simple mindfulness exercises can reduce stress and improve your overall mental health.',
    imageUrl: getImage('article-1'),
    imageHint: getHint('article-1'),
    author: 'Dr. Evelyn Reed',
    date: '2023-10-26',
    content: '<p>Mindfulness is the basic human ability to be fully present, aware of where we are and what we’re doing, and not overly reactive or overwhelmed by what’s going on around us. This article explores various techniques to practice mindfulness throughout your day.</p><p>From mindful breathing to paying attention to sensory details in your environment, these practices can help you stay grounded. We will delve into the science behind why it works and provide a step-by-step guide to get you started.</p>',
  },
  {
    id: '2',
    title: 'Understanding and Managing Anxiety',
    excerpt: 'Anxiety is a common human experience, but it doesn\'t have to control your life. Discover effective strategies for managing anxiety.',
    imageUrl: getImage('article-2'),
    imageHint: getHint('article-2'),
    author: 'Dr. Samuel Chen',
    date: '2023-10-22',
    content: '<p>This article provides a comprehensive overview of anxiety disorders, their symptoms, and causes. We will discuss practical, evidence-based strategies for managing anxiety, including cognitive-behavioral techniques, lifestyle adjustments, and when to seek professional help. You are not alone, and help is available.</p>',
  },
  {
    id: '3',
    title: 'Building Resilience: Bouncing Back from Adversity',
    excerpt: 'Resilience is the ability to adapt to difficult situations. This article explores how you can cultivate resilience in your own life.',
    imageUrl: getImage('article-3'),
    imageHint: getHint('article-3'),
    author: 'Dr. Anika Sharma',
    date: '2023-10-18',
    content: '<p>Life is full of challenges, but building resilience can help you navigate them more effectively. This article discusses the key pillars of resilience, such as social support, optimism, and self-care. We offer practical tips and exercises to help you strengthen your ability to bounce back from setbacks and thrive in the face of adversity.</p>',
  },
    {
    id: '4',
    title: 'The Therapeutic Benefits of Journaling',
    excerpt: 'Putting your thoughts and feelings onto paper can be a powerful tool for self-discovery and emotional healing. Explore how to start.',
    imageUrl: getImage('article-4'),
    imageHint: getHint('article-4'),
    author: 'Dr. Marcus Thorne',
    date: '2023-10-15',
    content: '<p>Journaling is more than just keeping a diary. It\'s a form of self-care that can help you process emotions, reduce stress, and gain clarity. This article guides you through different journaling techniques, such as gratitude journaling, free-writing, and bullet journaling, to help you find a practice that works for you.</p>',
  },
];

export const communities: Community[] = [
  {
    id: '1',
    name: 'Anxiety Support Group',
    description: 'A safe and supportive space for individuals navigating the challenges of anxiety. Share experiences and coping strategies.',
    memberCount: 128,
    imageUrl: getImage('community-1'),
    imageHint: getHint('community-1'),
  },
  {
    id: '2',
    name: 'Mindful Living Community',
    description: 'For those interested in integrating mindfulness into their daily lives. Join us for weekly guided meditations and discussions.',
    memberCount: 254,
    imageUrl: getImage('community-2'),
    imageHint: getHint('community-2'),
  },
  {
    id: '3',
    name: 'Creative Expression for Mental Wellness',
    description: 'Explore the healing power of art, writing, and music. No artistic skill required – just an open mind.',
    memberCount: 88,
    imageUrl: getImage('community-3'),
    imageHint: getHint('community-3'),
  },
];
