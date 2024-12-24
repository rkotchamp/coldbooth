import { NextResponse } from "next/server";
import { verifyJwtToken } from "./app/lib/jwt";

const protectedRoutes = ["/dashboard", "profile", "/api/protected"];
const publicRoutes = ["/api/auth/signup", "/api/auth/login", "/"];

export default async function middleware(request) {
  console.log("Middleware is running");
  console.log(request.cookies.get("token")?.value);

  const { pathname } = request.nextUrl;

  if (protectedRoutes.includes(pathname)) {
    return NextResponse.next();
  }

  const token = request.cookies.get("token")?.value;
}
