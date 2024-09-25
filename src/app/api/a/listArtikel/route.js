import { prisma } from "@/controllers/prisma";
import { ResponseData } from '@/components/api/ResponseData'

export async function GET(req) {
    const data = await prisma.postArtikel.findMany({
        orderBy: {
            id: 'desc'
        }, include: {
            imageProductArtikel: true
        }
    })

    const authorization = req.headers.get('authorization')
    const res = await ResponseData(data, authorization)
    return res
}


export async function POST(req) {
    const authorization = req.headers.get('authorization')
    const {
        title,
        slug,
        content,
        description,
        tags,
        saveDraf,

        dataImage
    } = await req.json()


    BigInt.prototype.toJSON = function () {
        return this.toString();
    };

    if (authorization == process.env.NEXT_PUBLIC_SECREET) {
        const CreateList = await prisma.postArtikel.create({
            data: {
                title,
                slug,
                content,
                description,
                tags,
                saveDraf,
                imageProductArtikel: { create: dataImage }
            }
        })
        const res = await ResponseData(CreateList, authorization)
        return res
    } else return Response.json({ status: 500, isCreated: false, contact: 'natanael rio wijaya 08971041460' })
}

export async function PUT(req) {
    const authorization = req.headers.get('authorization')

    const {
        title,
        slug,
        content,
        description,
        tags,
        saveDraf,

        dataImage
    } = await req.json()
    console.log(slug);


    if (authorization == process.env.NEXT_PUBLIC_SECREET) {
        const data = await prisma.postArtikel.updateMany({
            where: { slug: slug },
            data: {
                title,
                slug,
                content,
                description,
                tags,
                saveDraf
            }
        })

        for (const image of dataImage) {
            await prisma.imageProductArtikel.create({
                data: { ...image, IdProduct: slug }
            })
        }
        const res = await ResponseData(data, authorization)
        return res
    } else return Response.json({ status: 500, isCreated: false, contact: 'natanael rio wijaya 08971041460' })

}

export async function DELETE(req) {
    const authorization = req.headers.get('authorization')

    BigInt.prototype.toJSON = function () {
        return this.toString();
    };

    const {
        public_id,
    } = await req.json()


    if (authorization == process.env.NEXT_PUBLIC_SECREET) {
        const CreateList = await prisma.imageProductArtikel.delete({
            where: {
                public_id
            },
        })
        const res = await ResponseData(CreateList, authorization)
        return res
    } else return Response.json({ status: 500, isCreated: false, contact: 'natanael rio wijaya 08971041460' })

}