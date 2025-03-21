import { AccessTokenUser } from "@/interfaces/accesstokens";
import VerifyTokenServer from "@/verifytoken/verifytokenserver";
import Header from "./header";

export default async function HeaderServer() {
  const token: AccessTokenUser | null = await VerifyTokenServer();

  return <Header token={token} />;
}
