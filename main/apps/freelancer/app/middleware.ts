
import { NextResponse } from 'next/server';
import type { NextRequest } from 'next/server';
import { getServerSession } from 'next-auth';
import { authOptions } from './lib/auth'; 

export async function middleware(request: NextRequest) {
  const session = await getServerSession(authOptions);


  if (session?.user) {
    return NextResponse.redirect(new URL('/dashboard', request.url));
  }


  return NextResponse.redirect(new URL('/api/auth/signin', request.url));
}


export const config = {
  matcher: ['/','/dashboard', '/api/auth/signin'], 
};
