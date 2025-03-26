import { NextRequest, NextResponse } from "next/server";
import { dbConnect } from "@/util/db";
import User from "@/models/User";

export async function POST(request: NextRequest){
    try {
        const {email, password} = await request.json();
        
        if(!email || !password) {
            console.log("Email and password are required");            
            return NextResponse.json({error: "Email and password are required"}, {status: 400});
        }
        await dbConnect();
        //if user already exists
        const existingUser = await User.findOne({email});
        if(existingUser) {
            return NextResponse.json({
                error: "User already exists"
            }, {status: 400})            
        }
        //create new user
        await User.create({
            email,
            password
        });
        return NextResponse.json({message: "User created successfully"});

    } catch (error) {
        console.log(error);
        return NextResponse.json({
            error: "User not created successfully",
            status: 500
            });
    }
}