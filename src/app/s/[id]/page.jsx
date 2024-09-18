import ListProduct from "@/components/listProduct";

export const dynamic = 'force-dynamic'

export async function GetListProduct(id) {
    try {
        const res = await fetch(`${process.env.NEXT_PUBLIC_URL}/api/get/searchListProduct?query=${id}`, {
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

export default async function Home({ params }) {
    const data = await GetListProduct(params.id)

    return (
        <>
            <ListProduct dataList={data?.data} query={params.id} />
        </>
    );
}
