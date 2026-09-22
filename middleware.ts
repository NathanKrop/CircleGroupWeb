import { NextRequest, NextResponse } from "next/server";

export function middleware(request: NextRequest) {
  const host = request.headers.get("host")?.split(":")[0];
  if (host === "circlegroupke.org") {
    const url = request.nextUrl.clone();
    url.protocol = "https:";
    url.host = "www.circlegroupke.org";
    return NextResponse.redirect(url, 301);
  }
  return NextResponse.next();
}

export const config = { matcher: "/:path*" };
