'use server'
export const HandleDeleteImage = async (public_id) => {
    try {
        await fetch(`${process.env.NEXT_PUBLIC_URL}/api/c/imageProduct`, {
            method: 'DELETE',
            headers: {
                'Content-Type': 'application/json',
                'Authorization': `${process.env.NEXT_PUBLIC_SECREET}`
            },
            body: JSON.stringify({ public_id }),
        })
    } catch (error) {
        console.log(error);
    }
}