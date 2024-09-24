import FormInput from "@/components/FormInput";
import { getServerSession } from "next-auth";
import { authOptions } from "@/lib/auth";
import Login from "@/components/login";
import { HandleGetKategori } from "@/service/handleGetKategori";
// import dynamic from 'next/dynamic';
// const FormInput = dynamic(() => import('@/components/MyForm'), { ssr: false });

export const dynamic = 'force-dynamic'

export default async function Page() {
    const session = await getServerSession(authOptions)
    const dataKategori = await HandleGetKategori()
    return (
        <>
            {session ? <FormInput dataKategori={dataKategori?.data} /> : <Login />}
        </>
    )
}

