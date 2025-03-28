import ImageKit from "imagekit"
import { NextResponse } from "next/server";

const imagekit = new ImageKit({
    publicKey: process.env.NEXT_IMAGEKIT_PUBLIC_KEY!,
    privateKey: process.env.NEXT_IMAGEKIT_PRIVATE_KEY!,
    urlEndpoint: process.env.NEXT_PUBLIC_URL_ENDPOINT!,
});

export async function GET() {
    try {
        return NextResponse.json(imagekit.getAuthenticationParameters());
    } catch (error) {
        console.log(error);
        
        return NextResponse.json(
            {error: "Imagekit Auth Failed"},
            {status: 500}
        )
    }
}