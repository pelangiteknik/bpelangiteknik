import FormInputArtikel from "@/components/FormInputArtikel";
import { getServerSession } from "next-auth";
import { authOptions } from "@/lib/auth";
import Login from "@/components/login";

export default async function Home() {
  const session = await getServerSession(authOptions)

  return (
    <>
      {session ? <FormInputArtikel /> : <Login />}
    </>
  );
}
