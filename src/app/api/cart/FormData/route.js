import { ResponseData } from '@/components/api/ResponseData'
import { prisma } from "@/controllers/prisma"

export async function POST(req) {
    const { cartID,
        nama_lengkap_user,
        alamat_lengkap_user,
        kode_pos_user,
        no_hp_user,
        catatan_pengiriman,
    } = await req.json()

    BigInt.prototype.toJSON = function () {
        return this.toString();
    };

    const authorization = req.headers.get('authorization')
    if (authorization == process.env.NEXT_PUBLIC_SECREET) {
        const data = await prisma.formPembelian.upsert({
            where: {
                cartID: cartID
            },
            update: {
                nama_lengkap_user,
                alamat_lengkap_user,
                kode_pos_user,
                no_hp_user,
                catatan_pengiriman,
            },
            create: {
                cartID,
                nama_lengkap_user,
                alamat_lengkap_user,
                kode_pos_user,
                no_hp_user,
                catatan_pengiriman,
            },

        })

        const res = await ResponseData(data, authorization)
        return res
    }
    return Response.json({ status: 500, isCreated: false, contact: 'natanael rio wijaya 08971041460' })
}