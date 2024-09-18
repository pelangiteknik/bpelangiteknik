import ListProduct from "../components/listProduct";

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
    const data = await res.json()
    return data
  } catch (error) {
    console.log(error);
  }
}

export default async function Home() {
  const data = await GetListProduct()

  return (
    <>
      <ListProduct dataList={data?.data} />
    </>
  );
}
