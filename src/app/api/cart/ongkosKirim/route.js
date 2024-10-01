import { ResponseData } from '@/components/api/ResponseData'
import { prisma } from "@/controllers/prisma"

export async function POST(req) {
    const { cartID,
        productName,
        price,
        quantity,
    } = await req.json()

    BigInt.prototype.toJSON = function () {
        return this.toString();
    };


    const authorization = req.headers.get('authorization')
    if (authorization == process.env.NEXT_PUBLIC_SECREET) {
        const data = await prisma.ongkosKirim.upsert({
            where: {
                cartID: cartID
            },
            update: {
                productName,
                price,
                quantity,
            },
            create: {
                cartID,
                productName,
                price,
                quantity,
            }
        })

        const res = await ResponseData(data, authorization)
        return res
    }
    return Response.json({ status: 500, isCreated: false, contact: 'natanael rio wijaya 08971041460' })
}