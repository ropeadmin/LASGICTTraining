import { NextRequest, NextResponse } from 'next/server';

export function middleware(req: NextRequest) {
  const cookie = req.cookies.get("authData")
  const cookieValue = cookie?.value;
  let accessToken = ''

  if (cookieValue) {
    const parsedCookie = JSON.parse(cookieValue);
    accessToken = parsedCookie.sessionToken;
    
  }

  if (!accessToken) {
    console.log(accessToken)
    return NextResponse.redirect(new URL('/sign-in', req.url));
  }
  console.log(accessToken)

  return NextResponse.next()
}

export const config = {
  matcher: ['/course-monitoring', '/recordings']
}