import { NextRequest, NextResponse } from 'next/server';

export function middleware(req: NextRequest) {
  const cookie = req.cookies.get("authData");
  const cookieValue = cookie?.value;
  let accessToken = '';

  console.log(cookie)

  if (!cookieValue) {
    console.log("No authData cookie found, redirecting to sign-in");
    return NextResponse.redirect(new URL('/sign-in', req.url));
  }

  try {
    const parsedCookie = JSON.parse(cookieValue);
    accessToken = parsedCookie;
    // console.log(accessToken, "Valid session token");
  } catch (error) {
    console.error("Failed to parse authData cookie:", error);
    return NextResponse.redirect(new URL('/sign-in', req.url));
  }

  if (!accessToken) {
    console.log("No session token found, redirecting to sign-in");
    return NextResponse.redirect(new URL('/sign-in', req.url));
  }

  return NextResponse.next();
}

export const config = {
  matcher: ['/course-monitoring/:path*', '/recordings/:path*'],
};
