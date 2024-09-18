import { prisma } from "@/controllers/prisma";
import { ResponseData } from '@/components/api/ResponseData'

export async function POST(req) {
    const authorization = req.headers.get('authorization')

    const { slugProduct,
        productName,
        saveDraf,
        productType,
        subProductType,
        tagProduct,
        descProduct,
        stockProduct,
        productPrice,
        productDiscount,
        productPriceFinal } = await req.json()

    BigInt.prototype.toJSON = function () {
        return this.toString();
    };

    const data = {
        slugProduct,
        productName,
        saveDraf,
        productType,
        subProductType,
        tagProduct,
        descProduct,
        stockProduct,
        productPrice,
        productDiscount,
        productPriceFinal
    }


    if (authorization == process.env.NEXT_PUBLIC_SECREET) {
        const CreateList = await prisma.listProduct.create({ data: data })
        const res = await ResponseData(CreateList, authorization)
        return res
    } else return Response.json({ status: 500, isCreated: false, contact: 'natanael rio wijaya 08971041460' })

}

export async function PUT(req) {
    const authorization = req.headers.get('authorization')

    const { slugProduct,
        productName,
        saveDraf,
        productType,
        subProductType,
        tagProduct,
        descProduct,
        stockProduct,
        productPrice,
        productDiscount,
        productPriceFinal } = await req.json()

    BigInt.prototype.toJSON = function () {
        return this.toString();
    };

    const data = {
        slugProduct,
        productName,
        saveDraf,
        productType,
        subProductType,
        tagProduct,
        descProduct,
        stockProduct,
        productPrice,
        productDiscount,
        productPriceFinal
    }

    console.log(data)

    if (authorization == process.env.NEXT_PUBLIC_SECREET) {
        const CreateList = await prisma.listProduct.updateMany({
            where: {
                slugProduct: slugProduct
            },
            data: data
        })

        const res = await ResponseData(CreateList, authorization)
        return res
    } else return Response.json({ status: 500, isCreated: false, contact: 'natanael rio wijaya 08971041460' })

}

