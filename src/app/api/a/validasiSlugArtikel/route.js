import { prisma } from "@/controllers/prisma";
import { ResponseData } from '@/components/api/ResponseData'

export async function GET(req) {
    const searchParams = req.nextUrl.searchParams;
    const query = searchParams.get('query')

    const data = await prisma.postArtikel.findMany({
        where: {
            slug: {
                contains: query
            }
        },
        orderBy: {
            id: 'asc'
        }
    })

    const authorization = req.headers.get('authorization')
    const res = await ResponseData(data, authorization)
    return res
}