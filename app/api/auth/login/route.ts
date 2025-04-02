import User from "@/models/User";
import { dbConnect } from "@/util/db";
import bcrypt from "bcryptjs";
import { NextRequest, NextResponse } from "next/server";

export async function POST(request: NextRequest){
    try {
        const {email, password} = await request.json();
        if(!email || !password) {
            console.log("Email and password are required");
            return new Response(JSON.stringify({error: "Email and password are required"}), {status: 400});
        }
        //connect to db
        await dbConnect();
        //find user by email
        const user = await User.findOne({email});
        if(!user) {
            return new NextResponse(JSON.stringify({error: "User not found"}), {status: 404});
        }
        //check password
        const isMatch = await bcrypt.compare(password, user.password);
        if(!isMatch) {
            return new NextResponse(JSON.stringify({error: "Invalid credentials"}), {status: 401});
        }
        return new NextResponse(JSON.stringify({message: "Login successful"}), {status: 200});
    } catch (error) {
        console.log(error);
        return new NextResponse(JSON.stringify({error: "Login failed"}), {status: 500});
    }
}