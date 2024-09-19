import { prisma } from "@/controllers/prisma";
import { ResponseData } from '@/components/api/ResponseData'

export async function POST(req) {
    const authorization = req.headers.get('authorization')

    BigInt.prototype.toJSON = function () {
        return this.toString();
    };

    const {
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
        IdProduct
    } = await req.json()

    const data = {
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
        IdProduct
    }
    if (authorization == process.env.NEXT_PUBLIC_SECREET) {
        const CreateList = await prisma.specProduct.create({ data: data })
        const res = await ResponseData(CreateList, authorization)
        return res
    } else return Response.json({ status: 500, isCreated: false, contact: 'natanael rio wijaya 08971041460' })

}


export async function PUT(req) {
    const authorization = req.headers.get('authorization')

    BigInt.prototype.toJSON = function () {
        return this.toString();
    };

    const {
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
        IdProduct
    } = await req.json()

    const data = {
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
        IdProduct
    }
    if (authorization == process.env.NEXT_PUBLIC_SECREET) {
        const CreateList = await prisma.specProduct.updateMany({
            where: {
                IdProduct: IdProduct
            },
            data: data
        })
        const res = await ResponseData(CreateList, authorization)
        return res
    } else return Response.json({ status: 500, isCreated: false, contact: 'natanael rio wijaya 08971041460' })

}
