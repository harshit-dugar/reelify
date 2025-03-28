"use client";
import React, { useState } from "react";
import { IKUpload } from "imagekitio-next";
import { Loader2 } from "lucide-react";
import { IKUploadResponse } from "imagekitio-next/dist/types/components/IKUpload/props";

interface FileUploadProp{
    onSuccess: (res: IKUploadResponse) => void
    onProgress?: (progress:number) => void;
    fileType?: "image" | "video"
}

export default function FileUpload({
    onSuccess,
    onProgress,
    fileType
}: FileUploadProp) {
    const [uploading,setUploading] = useState(false)
    const [error,setError] = useState<string | null>(null)

    const onError = (err: {message: string}) => {
        console.log("Error", err);
        setError(err.message)
        setUploading(false)
    };
    
    const hanldeSuccess = (res: IKUploadResponse) => {
        console.log("Success", res);
        setUploading(false)
        setError(null)
        onSuccess(res)
    };
    
    const onUploadStart = () => {
        setUploading(true)
        setError(null)
    };
    
    const onUploadProgress = (evt: ProgressEvent) => {
        if(evt.lengthComputable && onProgress){
            const percentComplete = (evt.loaded / evt.total)*100;
            onProgress(Math.round(percentComplete))
        }
    };

    const validateFile = (file:File) =>{
        if(fileType === "video"){
            if(!file.type.startsWith("/video")){
                setError("File must be Video")
                return false
            }
            if(file.size > 100 *1024 *1024){
                setError("Video must be less then 100 MB")
                return false
            }
        }else {
            const validTypes = ["image/jpeg","image/png"]
            if(!validTypes.includes(file.type)){
                setError("Please upload a valid file (JPEG, PNG)")
                return false
            }
            if(file.size > 5 *1024 *1024){
                setError("Image must be less then 5 MB")
                return false
            }
        }
        return false
    }

    return (
        <div className="space-y-2">
        <IKUpload
            fileName={fileType==="video"? "video":"image"}
            useUniqueFileName={true}
            responseFields={["tags"]}
            validateFile={validateFile}
            folder={fileType==="video" ? "/videos":"/images"}
            onError={onError}
            onSuccess={hanldeSuccess}
            onUploadProgress={onUploadProgress}
            onUploadStart={onUploadStart}
            />
            {
                uploading && (
                    <div className="flex items-center gap-2">
                        <Loader2 className="animate-spin"/>
                        <span>Uploading...</span>
                    </div>
                )
            }
            {error && (
                <div>{error}</div>
            )}
        </div>
    );
}