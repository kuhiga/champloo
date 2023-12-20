import { createMiddlewareClient } from '@supabase/auth-helpers-nextjs';
import { NextResponse } from 'next/server';
import type { NextRequest } from 'next/server';

export async function middleware(req: NextRequest) {
  // We need to create a response and hand it to the supabase client to be able to modify the response headers.
  const res = NextResponse.next();
  // Create authenticated Supabase Client.
  const supabase = createMiddlewareClient({ req, res });
  await supabase.auth.getSession();
  return res;
}

export const config = {
    matcher: ["/((?!api|_next/static|_next/image|assets|favicon.ica|swa.js).*)"]
}
