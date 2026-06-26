import { NextRequest, NextResponse } from "next/server";

const COOKIE_NAME = "mkff_gate";
const COOKIE_VALUE = "granted";

export function proxy(request: NextRequest) {
  const isAuthed =
    request.cookies.get(COOKIE_NAME)?.value === COOKIE_VALUE;

  if (isAuthed) {
    return NextResponse.next();
  }

  // Always allow the gate page itself (and its server-action POSTs) through.
  if (request.nextUrl.pathname === "/gate") {
    return NextResponse.next();
  }

  const url = request.nextUrl.clone();
  url.pathname = "/gate";
  url.search = "";
  url.searchParams.set("from", request.nextUrl.pathname);
  return NextResponse.redirect(url);
}

export const config = {
  // Run on everything except Next internals and static asset files (those
  // containing a dot, e.g. images and fonts).
  matcher: [
    "/((?!_next/static|_next/image|favicon.ico|.*\\..*).*)",
  ],
};
