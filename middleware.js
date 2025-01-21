'use server'
import {NextResponse} from 'next/server'
import {getSession, getIpDevice} from "./data/data";
import {cookies} from "next/headers";

export async function middleware(req) {

    getIpDevice(req.ip)

    const session =  await cookies().get('userSession')?.value;

    if (!session) {
        if (req.nextUrl.pathname.includes('/Dashboard')) {
            return NextResponse.redirect(new URL('/login', req.url))
        }
        if (req.nextUrl.pathname.includes('/courses')) {
            return NextResponse.redirect(new URL('/login', req.url))
        }
    } else {
        if (req.nextUrl.pathname.includes('/login') || req.nextUrl.pathname.includes('/register')) {
            return NextResponse.redirect(new URL('/courses', req.url))
        }
    }
}

export const config = {
    matcher: ['/login', '/register', '/courses', '/', '/Dashboard', '/myprofile'],
    api: {
        bodyParser: {
            sizeLimit: '40mb',
        },
    },
}