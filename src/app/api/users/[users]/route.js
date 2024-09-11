import { NextResponse } from "next/server"


export async function GET(request, context) {
    const { params } = context

    console.log(params);

    return NextResponse.json({ data: params })
}