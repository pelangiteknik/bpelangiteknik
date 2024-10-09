import { ResponseData } from '@/components/api/ResponseData'
import { prisma } from "@/controllers/prisma"

export async function POST(req) {
    const { id, fromItems } = await req.json()

    BigInt.prototype.toJSON = function () {
        return this.toString();
    };

    const authorization = req.headers.get('authorization')
    const data = await prisma.dataPesanan.create({
        data: {
            merchantOrderId: id.merchantOrderId,
            reference: id.reference,
            cartID: id.cartID,
            dataPesananItems: { create: fromItems }
        },
    });


    const res = await ResponseData(data, authorization)
    return res
}