import FormInput from "../../../components/FormInput";
export const dynamic = 'force-dynamic'

export async function GetListProduct(id) {
    try {
        const res = await fetch(`${process.env.NEXT_PUBLIC_URL}/api/get/product?id=${id}`, {
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

export default async function Page({ params }) {
    const data = await GetListProduct(params.id)
    const dataku = await data?.data[0]

    return (
        <FormInput data={dataku} />
    )
}