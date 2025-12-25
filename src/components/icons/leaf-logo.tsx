import type { SVGProps } from 'react';
import { cn } from '@/lib/utils';

export function LeafLogo(props: SVGProps<SVGSVGElement>) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      className={cn('h-6 w-6', props.className)}
      {...props}
    >
      <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2z" fill="currentColor" />
      <path d="M12 22c-4.42 0-8-3.58-8-8s3.58-8 8-8 8 3.58 8 8-3.58 8-8 8z" fill="none" />
      <path d="M12 2a10 10 0 1 0 10 10" stroke="none" />
      <path
        d="M12,4A8,8,0,0,1,16.29,18.29,8,8,0,0,1,7.71,7.71,7.93,7.93,0,0,1,12,4M12,2a10,10,0,1,0,10,10A10,10,0,0,0,12,2Z"
        transform="translate(0 0)"
        fill="#fff"
      />
      <path
        d="M14.5,9.5a5.5,5.5,0,1,0,0,7A5.4,5.4,0,0,0,14.5,9.5Z"
        transform="translate(0 0)"
        fill="currentColor"
      />
    </svg>
  );
}
