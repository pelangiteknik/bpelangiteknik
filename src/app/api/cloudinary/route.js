import { NextResponse } from "next/server"
import { v2 as cloudinary } from 'cloudinary'

export async function POST(req, res) {
    try {
        const formData = await req.formData();
        const files = formData.getAll("files"); // Get all files

        const uploadResults = []; // Array to store the results


        // Loop through each file and save it
        for (const file of files) {
            const arrayBuffer = await file.arrayBuffer();
            const buffer = Buffer.from(arrayBuffer);

            await new Promise((resolve, reject) => {
                cloudinary.uploader.upload_stream({
                    tags: ['nextjs-server-actions-upload-sneakers'],
                    upload_preset: 'nknvbv7x',
                }, function (error, result) {
                    if (error) {
                        reject(error);
                        return;
                    }
                    uploadResults.push(result)
                    resolve(result);
                }).end(buffer);
            });
        }
        // Return the array of results
        return NextResponse.json({ status: "success", results: uploadResults });
    } catch (e) {
        console.error(e);
        return NextResponse.json({ status: "fail", error: e });
    }
}


export async function DELETE(req, res) {
    cloudinary.config({
        cloud_name: process.env.NEXT_PUBLIC_CLOUDINARY_CLOUD_NAME,
        api_key: process.env.NEXT_PUBLIC_CLOUDINARY_API_KEY,
        api_secret: process.env.CLOUDINARY_API_SECRET
    });

    try {
        const result = await cloudinary.api.delete_resources(['zntwjwaaheilbolpov4x'], function (result) { console.log(result) });
        // Return the array of results
        return NextResponse.json({ status: "success", result });
    } catch (e) {
        console.error(e);
        return NextResponse.json({ status: "fail", error: e });
    }
}