import { ResponseData } from '@/components/api/ResponseData'
import { prisma } from "@/controllers/prisma"

export async function POST(req) {
    const { CART_ID, PRODUCT_ID, QUANTITY, CHECKLIST, NOTE } = await req.json()

    BigInt.prototype.toJSON = function () {
        return this.toString();
    };

    const authorization = req.headers.get('authorization')
    if (authorization == process.env.NEXT_PUBLIC_SECREET) {
        const data = await prisma.cartItem.create({
            data: {
                cartId: CART_ID,
                productId: PRODUCT_ID,
                quantity: QUANTITY,
                checkList: CHECKLIST,
                note: NOTE
            },
        });

        const res = await ResponseData(data, authorization)
        return res
    }
    return Response.json({ status: 500, isCreated: false, contact: 'natanael rio wijaya 08971041460' })
}


export async function PUT(req) {
    const { ID, CART_ID, PRODUCT_ID, QUANTITY, CHECKLIST, NOTE } = await req.json()

    BigInt.prototype.toJSON = function () {
        return this.toString();
    };

    const authorization = req.headers.get('authorization')
    const data = await prisma.cartItem.updateMany({
        where: {
            id: ID
        },
        data: {
            cartId: CART_ID,
            productId: PRODUCT_ID,
            quantity: QUANTITY,
            checkList: CHECKLIST,
            note: NOTE
        },
    });

    const res = await ResponseData(data, authorization)
    return res
}