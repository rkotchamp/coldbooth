import { NextResponse } from "next/server";
// import jwt from "jsonwebtoken";

// function verifyToken(token) {
//   try {
//     return jwt.verify(token, process.env.JWT_SECRET);
//   } catch (error) {
//     return null;
//   }
// }

export function middleware(request) {
  const path = request.nextUrl.pathname;
  const isPublicPath = path.startsWith("/auth");
  const token = request.cookies.get("token")?.value;

  if (token && isPublicPath) {
    return NextResponse.redirect(new URL("/", request.url));
  }

  if (!token && !isPublicPath) {
    console.log(request.url);
    return NextResponse.redirect(new URL("/auth/login", request.url));
  }

  return NextResponse.next();
}

export const config = {
  matcher: [
    "/((?!_next/static|_next/image|favicon.ico).*)",
    "/dashboard/:path*",
    "/auth/:path*",
    "/",
  ],
};
