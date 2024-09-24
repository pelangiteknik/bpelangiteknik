'use server'
export const HandleValidasi = async (slug) => {
    const resSlug = await fetch(`${process.env.NEXT_PUBLIC_URL}/api/get/validasiSlug?query=${slug}`, {
        headers: {
            'Content-Type': 'application/json',
            'Authorization': `${process.env.NEXT_PUBLIC_SECREET}`
        },
    });

    return resSlug.json();

}