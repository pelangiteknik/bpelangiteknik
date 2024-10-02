import { getServerSession } from "next-auth";
import { authOptions } from "@/lib/auth";
import ListPesanan from "@/components/listPesanan";

export default async function Page() {
    const session = await getServerSession(authOptions)

    return (session ? <ListPesanan /> : <Login />)
}
