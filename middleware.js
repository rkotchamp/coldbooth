import { NextResponse } from "next/server";
import { verifyJwtToken } from "./app/lib/jwt";

const protectedRoutes = ["/dashboard", "profile", "/api/protected"];
const publicRoutes = ["/api/auth/signup", "/api/auth/login", "/"];

export default async function middleware(request) {
  const { pathname } = request.nextUrl;

  if (protectedRoutes.includes(pathname)) {
    return NextResponse.next();
  }

  const token = request.cookies.get("token")?.value;

  if (protectedRoutes.includes(pathname) && !token) {
    return NextResponse.redirect(new URL("/api/auth/login", request.url));
  }

  try {
    if (token) {
      const decodedToken = await verifyJwtToken(token);

      const requestHeaders = new Headers(request.headers);
      requestHeaders.set("user", JSON.stringify(decodedToken));

      return NextResponse.next({
        request: { headers: requestHeaders },
      });
    }

    return NextResponse.next();
  } catch (error) {
    console.log("Access Denied:Invalid token");
    return NextResponse.redirect(new URL("/api/auth/login", request.url));
  }
}

export const config = {
  matcher: ["/((?!_next/static|_next/image|favicon.ico).*)"],
};
