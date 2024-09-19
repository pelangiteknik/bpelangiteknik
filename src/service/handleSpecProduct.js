'use server'
export const HandleSpecProduct = async ({ GabungData, data }) => {
    try {
        await fetch(`${process.env.NEXT_PUBLIC_URL}/api/c/specProduct`, {
            method: data ? 'PUT' : 'POST',
            headers: {
                'Content-Type': 'application/json',
                'Authorization': `${process.env.NEXT_PUBLIC_SECREET}`
            },
            body: JSON.stringify(GabungData),
        })
    } catch (error) {
        console.log(error);
    }
}