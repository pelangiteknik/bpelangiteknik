'use server'
export const HandleUploadImageC = async (data) => {
    try {
        await fetch(`${process.env.NEXT_PUBLIC_URL}/api/c/imageProduct`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                'Authorization': `${process.env.NEXT_PUBLIC_SECREET}`
            },
            body: JSON.stringify(data),
        })
    } catch (error) {
        console.log(error);
    }
}