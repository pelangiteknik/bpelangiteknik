'use server'
import { revalidatePath } from 'next/cache';

export const HandleDeleteProduct = async (slug) => {
    await fetch(`${process.env.NEXT_PUBLIC_URL}/api/del/listProduct`, {
        method: 'DELETE',
        headers: {
            'Content-Type': 'application/json',
            'Authorization': `${process.env.NEXT_PUBLIC_SECREET}`
        },
        body: JSON.stringify({
            slugProduct: slug
        }),
        next: {
            revalidate: 0
        }

    });
    revalidatePath('/')
}