/* eslint-disable @typescript-eslint/no-unused-vars */
import Video from "@/models/Video";
import { authOptions } from "@/util/auth";
import { dbConnect } from "@/util/db";
import { getServerSession } from "next-auth";
import { NextRequest, NextResponse } from "next/server";


export async function GET() {
    try {
        await dbConnect();
        const videos = await Video.find({}).sort({createdAt:-1}).lean()
        if(!videos || videos.length===0){
            return NextResponse.json([],{status:200})
        }
        return NextResponse.json(videos)
    } catch (error) {
        return NextResponse.json(
            {error: "Videos fetch failed"},
            {status:200}
        )
    }
}

export async function POST(req: NextRequest){
    try {
        //If user is authorized then only POST
        //Using NextAuth
        const session = await getServerSession(authOptions)
        if(!session){
            return NextResponse.json(
                {error: "Unauthorized"},
                {status: 400}
            )
        }

        await dbConnect();
        const body = await req.json();
        if(!body.title ||
            !body.description ||
            !body.url ||
            !body.thumbnailUrl
        ){
            return NextResponse.json(
                {error: "Missing required fields"},
                {status: 401}
            )
        }
        const videoData = {
            ...body,
            controls: body.controls ?? true,
            transformation: {
                height:1920,
                width: 1080,
                quality: body.transformation?.quality ?? 100
            }
        }
        const newVideo = await Video.create(videoData)
        return NextResponse.json(newVideo)

    } catch (error) {
        console.log("Failed video creation");
        
        return NextResponse.json(
            {error: "Videos fetch failed"},
            {status:200}
        )
    }
}