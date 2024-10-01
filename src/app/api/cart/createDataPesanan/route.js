import { ResponseData } from '@/components/api/ResponseData'
import { prisma } from "@/controllers/prisma"

export async function POST(req) {
    const { id, fromItems } = await req.json()

    BigInt.prototype.toJSON = function () {
        return this.toString();
    };

    console.log(fromItems);

    const authorization = req.headers.get('authorization')
    const data = await prisma.dataPesanan.create({
        data: {
            merchantOrderId: id.merchantOrderId,
            reference: id.reference,
            cartID: id.cartID,
            dataPesananItems: { create: fromItems }
        },
    });

    console.log(data);

    const res = await ResponseData(data, authorization)
    return res
}