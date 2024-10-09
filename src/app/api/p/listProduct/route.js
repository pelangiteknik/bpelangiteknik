import { prisma } from "@/controllers/prisma";
import { ResponseData } from '@/components/api/ResponseData'

export async function GET(req) {
    const data = await prisma.listProduct.findMany({
        take: 10,
        orderBy: {
            id: 'desc'
        },
        where: {
            saveDraf: false
        },
        select: {
            id: true,
            start: true,
            end: true,
            productName: true,
            slugProduct: true,
            stockProduct: true,
            viewProduct: true,
            subKategoriProduct: true,
            productType: true,
            tagProduct: true,
            productPrice: true,
            productDiscount: true,
            productPriceFinal: true,
            imageProductUtama: {
                select: {
                    url: true,
                    secure_url: true,
                    asset_id: true,
                    public_id: true,
                }
            }
        }
    })

    const authorization = req.headers.get('authorization')
    const res = await ResponseData(data, authorization)
    return res
}