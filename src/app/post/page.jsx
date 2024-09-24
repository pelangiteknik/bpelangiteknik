import FormInput from "@/components/FormInput";
// import { getServerSession } from "next-auth";
// import { authOptions } from "@/lib/auth";
// import Login from "@/components/login";
import { HandleGetKategori } from "@/service/handleGetKategori";

export const dynamic = 'force-dynamic'

export default async function Page() {
    // const session = await getServerSession(authOptions)
    const dataKategori = await HandleGetKategori()
    return (
        <>
            <FormInput dataKategori={dataKategori?.data} />
            {/* {session ? <FormInput dataKategori={dataKategori?.data} /> : <Login />} */}
        </>
    )
}

