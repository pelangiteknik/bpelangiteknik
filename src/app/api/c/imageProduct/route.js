import { prisma } from "../../../../controllers/prisma";
import { ResponseData } from '../../../../components/api/ResponseData'

export async function POST(req) {
    const authorization = req.headers.get('authorization')

    BigInt.prototype.toJSON = function () {
        return this.toString();
    };

    const {
        asset_id,
        public_id,
        version,
        version_id,
        signature,
        width,
        height,
        format,
        resource_type,
        created_at,
        bytes,
        type,
        etag,
        placeholder,
        url,
        asset_folder,
        display_name,
        original_filename,
        api_key,
        IdProduct
    } = await req.json()

    const data = {
        asset_id,
        public_id,
        version,
        version_id,
        signature,
        width,
        height,
        format,
        resource_type,
        created_at,
        bytes,
        type,
        etag,
        placeholder,
        url,
        asset_folder,
        display_name,
        original_filename,
        api_key,
        IdProduct
    }

    if (authorization == process.env.NEXT_PUBLIC_SECREET) {
        const CreateList = await prisma.imageProduct.create({ data: data })
        const res = await ResponseData(CreateList, authorization)
        return res
    } else return Response.json({ status: 500, isCreated: false, contact: 'natanael rio wijaya 08971041460' })

}
