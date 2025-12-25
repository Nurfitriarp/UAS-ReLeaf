'use client';

import { Button } from '@/components/ui/button';
import { LeafLogo } from '@/components/icons/leaf-logo';
import { useRouter } from 'next/navigation';
import { useAuth } from '@/firebase';
import { GoogleAuthProvider, signInWithPopup } from 'firebase/auth';
import { useEffect } from 'react';
import { useUser } from '@/firebase';

export default function LoginPage() {
  const router = useRouter();
  const auth = useAuth();
  const { user, isUserLoading } = useUser();

  useEffect(() => {
    if (user && !isUserLoading) {
      router.push('/dashboard');
    }
  }, [user, isUserLoading, router]);

  const handleLogin = async () => {
    const provider = new GoogleAuthProvider();
    try {
      await signInWithPopup(auth, provider);
      router.push('/dashboard');
    } catch (error) {
      console.error('Error during sign-in:', error);
    }
  };

  if (isUserLoading || user) {
    return (
      <div className="flex min-h-screen w-full flex-col items-center justify-center bg-background p-4">
        <LeafLogo className="h-24 w-24 animate-pulse text-primary" />
      </div>
    );
  }

  return (
    <div className="flex min-h-screen w-full flex-col items-center justify-center bg-background p-4">
      <div className="flex flex-col items-center text-center">
        <LeafLogo className="mb-6 h-24 w-24 text-primary" />
        <h1 className="font-headline text-5xl font-bold text-primary">
          ReLeaf
        </h1>
        <p className="mt-2 text-lg text-muted-foreground">
          Find your peace, one leaf at a time.
        </p>
      </div>
      <div className="mt-12 w-full max-w-xs">
        <Button
          onClick={handleLogin}
          size="lg"
          className="w-full text-base"
        >
          <svg
            className="mr-2 h-5 w-5"
            aria-hidden="true"
            focusable="false"
            data-prefix="fab"
            data-icon="google"
            role="img"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 488 512"
          >
            <path
              fill="currentColor"
              d="M488 261.8C488 403.3 381.5 512 244 512 109.8 512 0 402.2 0 256S109.8 0 244 0c73.2 0 136 29.3 181.9 74.3L360.4 139.5C334.3 116.5 292.8 98.4 244 98.4c-87.5 0-159.2 71.7-159.2 159.6s71.7 159.6 159.2 159.6c99.2 0 134-70.3 138.8-106.5H244v-74.4h239.1c2.3 12.7 3.9 26.1 3.9 40.2z"
            ></path>
          </svg>
          Sign In with Google
        </Button>
        <p className="mt-4 px-8 text-center text-xs text-muted-foreground">
          By signing in, you agree to our{' '}
          <a href="#" className="underline underline-offset-4 hover:text-primary">
            Terms of Service
          </a>{' '}
          and{' '}
          <a href="#" className="underline underline-offset-4 hover:text-primary">
            Privacy Policy
          </a>
          .
        </p>
      </div>
    </div>
  );
}
