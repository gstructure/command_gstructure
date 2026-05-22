import { NextResponse, type NextRequest } from "next/server";
import { createSupabaseMiddlewareClient } from "@/lib/supabase/middleware";

const publicRoutes = ["/login"];

export async function middleware(req: NextRequest) {
  const res = NextResponse.next();
  const supabase = createSupabaseMiddlewareClient(req, res);
  const {
    data: { session }
  } = await supabase.auth.getSession();

  const isPublicRoute = publicRoutes.some((route) =>
    req.nextUrl.pathname.startsWith(route)
  );

  if (!session && !isPublicRoute) {
    const redirectUrl = req.nextUrl.clone();
    redirectUrl.pathname = "/login";
    redirectUrl.searchParams.set("next", req.nextUrl.pathname);
    return NextResponse.redirect(redirectUrl);
  }

  if (session && req.nextUrl.pathname === "/login") {
    const redirectUrl = req.nextUrl.clone();
    redirectUrl.pathname = "/dashboard";
    return NextResponse.redirect(redirectUrl);
  }

  return res;
}

export const config = {
  matcher: [
    "/((?!_next/static|_next/image|favicon.ico|robots.txt|sitemap.xml|.*\\.(?:svg|png|jpg|jpeg|gif|webp)$).*)"
  ]
};
