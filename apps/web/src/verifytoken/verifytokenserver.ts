import { verify } from "jsonwebtoken";
import { jwtDecode } from "jwt-decode";
import { cookies } from "next/headers";
import { AccessTokenUser } from "@/interfaces/accesstokens";

function checkExpired(token: AccessTokenUser): boolean {
  if (token.exp) {
    return new Date().valueOf() > new Date(token.exp).valueOf();
  } else {
    return false;
  }
}

export default async function VerifyTokenServer(): Promise<AccessTokenUser | null> {
  try {
    const cookieStore = await cookies();

    let decodedToken: AccessTokenUser | null = null;
    const newToken = cookieStore.get("access_token")?.value;
    if (newToken) {
      decodedToken = jwtDecode(String(newToken));
      const verified2 = verify(
        newToken,
        String(process.env.NEXT_PUBLIC_SECRET_KEY)
      );
      if (!verified2) {
        throw new Error("Unauthorized token!");
      }
    }

    return decodedToken && !checkExpired(decodedToken) ? decodedToken : null;
  } catch (err) {
    throw err;
  }
}
