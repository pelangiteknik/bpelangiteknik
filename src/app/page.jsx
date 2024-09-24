import ListProduct from "@/components/listProduct";
import { getServerSession } from "next-auth";
import { authOptions } from "@/lib/auth";
import Login from "@/components/login";
import { HandleGetKategori } from "@/service/handleGetKategori";

export const dynamic = 'force-dynamic'

export async function GetListProduct() {
  try {
    const res = await fetch(`${process.env.NEXT_PUBLIC_URL}/api/get/listProduct`, {
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

export default async function Home() {
  const dataList = await GetListProduct()
  const dataKategori = await HandleGetKategori()
  const session = await getServerSession(authOptions)

  return (
    <>
      {session ? <ListProduct dataList={dataList?.data} dataKategori={dataKategori?.data} /> : <Login />}
    </>
  );
}
