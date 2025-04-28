"use client"
import { ImageKitProvider} from "imagekitio-next";
import { SessionProvider } from "next-auth/react";
import React from "react";

const urlEndpoint = process.env.NEXT_PUBLIC_URL_ENDPOINT!;
const publicKey = process.env.NEXT_IMAGEKIT_PUBLIC_KEY!;

export default function Providers({children}: {children: React.ReactNode}) {
    const authenticator = async () => {
        try {
        const response = await fetch("/api/imagekit-auth");
            console.log("Imagekit Auth response",response);
            
        if (!response.ok) {
            const errorText = await response.text();
            throw new Error(`Request failed with status ${response.status}: ${errorText}`);
        }
    
        const data = await response.json();
        const { signature, expire, token } = data;
        console.log("Imagekit Auth data",data);
        
        return { signature, expire, token };
        } catch (error) {
            console.log(error);
            
            throw new Error("Imagekit Authentication request failed");
        }
    };

    return (
        <SessionProvider>
            <ImageKitProvider publicKey={publicKey} urlEndpoint={urlEndpoint} authenticator={authenticator}>
                {children}
            </ImageKitProvider>
        </SessionProvider>
    );
}