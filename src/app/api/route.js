import { NextResponse } from "next/server"
import { v2 as cloudinary } from 'cloudinary'

export async function GET(req, res) {
    return NextResponse.json({ hello: 'failed to load data' })
}

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
