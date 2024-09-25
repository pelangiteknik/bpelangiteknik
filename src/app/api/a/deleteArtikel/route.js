import { prisma } from "@/controllers/prisma";
import { ResponseData } from '@/components/api/ResponseData'

export async function DELETE(req) {
    const authorization = req.headers.get('authorization')

    const { slugProduct } = await req.json()
    if (authorization == process.env.NEXT_PUBLIC_SECREET) {

        const imageProduct = prisma.imageProductArtikel.deleteMany({
            where: {
                IdProductArtikel: slugProduct
            }
        })
        const postArtikel = prisma.postArtikel.deleteMany({
            where: {
                slug: slugProduct
            }
        })

        const data = await prisma.$transaction([imageProduct, postArtikel])
        const res = await ResponseData(data, authorization)
        return res
    } else return Response.json({ status: 500, isCreated: false, contact: 'natanael rio wijaya 08971041460' })

}
