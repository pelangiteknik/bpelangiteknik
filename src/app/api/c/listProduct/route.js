import { prisma } from "@/controllers/prisma";

import { ResponseData } from '@/components/api/ResponseData'

export async function POST(req) {
    const authorization = req.headers.get('authorization')

    const { slugProduct,
        productName,
        saveDraf,
        productType,
        productKategori,
        subKategoriProduct,
        tagProduct,
        descProduct,
        stockProduct,
        productPrice,
        productDiscount,
        productPriceFinal,
        urlYoutube,
        descMetaProduct,


        phase_spec,
        frequency_spec,
        gensetPower_spec,
        ratedPower_spec,
        maxPower_spec,
        ratedACVoltage_spec,
        starting_spec,
        fuelConsumption_spec,
        weight_spec,
        dimension_spec,

        dataImage,
        imageProductUtama
    } = await req.json()


    BigInt.prototype.toJSON = function () {
        return this.toString();
    };

    if (authorization == process.env.NEXT_PUBLIC_SECREET) {
        const CreateList = await prisma.listProduct.create({
            data: {
                slugProduct,
                productName,
                saveDraf,
                productType,
                productKategori,
                subKategoriProduct,
                tagProduct,
                descProduct,
                stockProduct,
                productPrice,
                productDiscount,
                productPriceFinal,
                urlYoutube,
                descMetaProduct,
                spec_product: {
                    create: {
                        phase_spec,
                        frequency_spec,
                        gensetPower_spec,
                        ratedPower_spec,
                        maxPower_spec,
                        ratedACVoltage_spec,
                        starting_spec,
                        fuelConsumption_spec,
                        weight_spec,
                        dimension_spec,
                    }
                },
                url_image_product: { create: dataImage },
                imageProductUtama: { create: imageProductUtama }
            }
        })
        const res = await ResponseData(CreateList, authorization)
        return res
    } else return Response.json({ status: 500, isCreated: false, contact: 'natanael rio wijaya 08971041460' })
}

export async function PUT(req) {
    const authorization = req.headers.get('authorization')

    const { IdProduct, slugProduct,
        productName,
        saveDraf,
        productType,
        productKategori,
        subKategoriProduct,
        tagProduct,
        descProduct,
        stockProduct,
        productPrice,
        productDiscount,
        productPriceFinal,
        urlYoutube,
        descMetaProduct,

        phase_spec,
        frequency_spec,
        gensetPower_spec,
        ratedPower_spec,
        maxPower_spec,
        ratedACVoltage_spec,
        starting_spec,
        fuelConsumption_spec,
        weight_spec,
        dimension_spec,

        dataImage,
        imageProductUtama
    } = await req.json()


    if (authorization == process.env.NEXT_PUBLIC_SECREET) {
        const UpdateList = await prisma.listProduct.updateMany({
            where: { id: IdProduct },
            data: {
                slugProduct,
                productName,
                saveDraf,
                productType,
                productKategori,
                subKategoriProduct,
                tagProduct,
                descProduct,
                stockProduct,
                productPrice,
                productDiscount,
                productPriceFinal,
                urlYoutube,
                descMetaProduct,
            }
        })

        const UpdateListSpec = await prisma.specProduct.updateMany({
            where: { id: IdProduct },
            data: {
                phase_spec,
                frequency_spec,
                gensetPower_spec,
                ratedPower_spec,
                maxPower_spec,
                ratedACVoltage_spec,
                starting_spec,
                fuelConsumption_spec,
                weight_spec,
                dimension_spec
            }
        })

        //LIST GAMBAR
        for (const image of dataImage) {
            await prisma.imageProduct.create({
                data: { ...image, IdProduct: IdProduct }
            })
        }

        // LIST GAMBAR UTAMA
        await prisma.imageProductUtama.create({
            data: { ...imageProductUtama, IdProduct: IdProduct }
        })

        const data = await prisma.$transaction([UpdateList, UpdateListSpec, UpdatImage])
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
        public_id, public_idUtama
    } = await req.json()


    if (authorization == process.env.NEXT_PUBLIC_SECREET) {
        if (public_idUtama) {
            await prisma.imageProductUtama.delete({
                where: {
                    public_id: public_idUtama
                },
            })
        }
        await prisma.imageProduct.delete({
            where: {
                public_id
            },
        })


        const res = await ResponseData(CreateList, authorization)
        return res
    } else return Response.json({ status: 500, isCreated: false, contact: 'natanael rio wijaya 08971041460' })

}