// middleware.ts
import { NextResponse } from 'next/server'
import type { NextRequest } from 'next/server'

export function middleware(request: NextRequest) {
    console.log("-------------------",!request.url.endsWith("/signin"))
    console.log("-------------------",!request.url.endsWith("/signin") && request.cookies.get('signed-in')?.value !== 'true')
    console.log(request.cookies.get('signed-in')?.value)
    if (!request.url.endsWith("/signin") && request.cookies.get('signed-in')?.value !== 'true') {
        return NextResponse.redirect(new URL('/admin/signin', request.url))
    }
}

export const config = {
    matcher: ['/admin/(.*)'],
}