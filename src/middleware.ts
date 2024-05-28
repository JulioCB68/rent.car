import { cookies } from 'next/headers'
import type { NextRequest } from 'next/server'

export function middleware(request: NextRequest) {
  const { pathname } = request.nextUrl
  const cookie = cookies()
  const userCookie = cookie.get('@rentcar:userId')

  // if (pathname === '/app' && !userCookie) {
  //   return NextResponse.rewrite(new URL('/login', request.url))
  // }

  // if ((pathname === '/login' || pathname === '/sign-up') && userCookie) {
  //   return NextResponse.rewrite(new URL('/app', request.url))
  // }
}

export const config = {
  matcher: [
    /*
     * Match all request paths except for the ones starting with:
     * - api (API routes)
     * - _next/static (static files)
     * - _next/image (image optimization files)
     * - favicon.ico (favicon file)
     */
    '/((?!api|_next/static|_next/image|favicon.ico).*)',
  ],
}
