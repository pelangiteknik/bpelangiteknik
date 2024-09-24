import FormInput from "@/components/FormInput";
// import { getServerSession } from "next-auth";
// import { authOptions } from "@/lib/auth";
// import Login from "@/components/login";
import { HandleGetKategori } from "@/service/handleGetKategori";

export const dynamic = 'force-dynamic'

export async function GetListKategoriProduct() {
    try {
        const res = await fetch(`${process.env.NEXT_PUBLIC_URL}/api/get/getKategoriProduct`, {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json',
                'Authorization': `${process.env.NEXT_PUBLIC_SECREET}`
            },
            next: {
                revalidate: 0
            }
        })
        return res.json()

    } catch (error) {
        console.log(error);
    }
}

export default async function Page() {
    // const session = await getServerSession(authOptions)
    const dataKategori = await GetListKategoriProduct()

    return (
        <>
            <FormInput dataKategori={dataKategori?.data} />
            {/* {session ? <FormInput dataKategori={dataKategori?.data} /> : <Login />} */}
        </>
    )
}

