import { NextRequest, NextResponse } from "next/server";
import { auth } from "@/lib/auth";
import { headers } from "next/headers";


const protectedPaths = [ "/dashboard", "/create-task" ]
const publicPaths = ["/auth/login", "/auth/register"];

export const proxy = async (request: NextRequest) => {
  const session = await auth.api.getSession({
    headers: await headers()
  })
  const isProtected = protectedPaths.some(path => request.nextUrl.pathname.startsWith(path))
  const isPublic = publicPaths.some(path => request.nextUrl.pathname.startsWith(path))

  if (session && isPublic){
    return NextResponse.redirect(new URL("/", request.url))
  }

  if (!session && isProtected){
    return NextResponse.redirect(new URL("/auth/login", request.url))
  }

  return NextResponse.next()
}