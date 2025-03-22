import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";
import { cookies } from "next/headers";
import { NextURL } from "next/dist/server/web/next-url";
import { jwtDecode } from "jwt-decode";
import { AccessTokenUser } from "./interfaces/accesstokens";

const protectedRoutes = ["/admin/dashboard"];
// const protectedRoutes = ["/thispathdoesn'texist"];

export default async function middleware(req: NextRequest) {
  try {
    const cookieStore = await cookies();
    const isProtected = protectedRoutes.some((path) =>
      req.nextUrl.pathname.startsWith(path)
    );

    const token = cookieStore.get("access_token")?.value || "";

    if (isProtected && !token) {
      return NextResponse.redirect(new NextURL("/admin", req.nextUrl));
    }

    let decodedToken: AccessTokenUser | null = null;
    if (token) {
      decodedToken = jwtDecode(token);
    }

    return NextResponse.next();
  } catch (err) {
    console.log("Something went wrong");
    console.log(err);
    return NextResponse.redirect(new NextURL("/admin", req.nextUrl));
  }
}

export const config = {
  matcher: ["/admin/dashboard/:path*"],
};
