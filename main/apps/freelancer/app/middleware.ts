// app/_middleware.ts
import { NextResponse } from 'next/server';
import type { NextRequest } from 'next/server';
import { getServerSession } from 'next-auth';
import { authOptions } from './lib/auth'; // Adjust the path accordingly

export async function middleware(request: NextRequest) {
  const session = await getServerSession(authOptions);

  // Redirect authenticated users to dashboard
  if (session?.user) {
    return NextResponse.redirect(new URL('/dashboard', request.url));
  }

  // Redirect unauthenticated users to sign-in page
  return NextResponse.redirect(new URL('/api/auth/signin', request.url));
}

// Define the paths that this middleware should apply to
export const config = {
  matcher: ['/','/dashboard', '/api/auth/signin'], // Apply to the root path
};
