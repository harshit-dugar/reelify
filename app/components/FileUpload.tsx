/* eslint-disable @typescript-eslint/no-explicit-any */
"use client";
import {
    upload,
} from "@imagekit/next";
import {  useState } from "react";
import { Loader2 } from "lucide-react";

interface FileUploadProp{
    onSuccess: (res: any) => void
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

    // const onError = (err: {message: string}) => {
    //     console.log("Error", err);
    //     setError(err.message)
    //     setUploading(false)
    // };
    
    // const hanldeSuccess = (res: any) => {
    //     console.log("Success", res);
    //     setUploading(false)
    //     setError(null)
    //     onSuccess(res)
    // };
    
    // const handleOnUploadStart = () => {
    //     setUploading(true)
    //     setError(null)
    // };
    
    // const onUploadProgress = (evt: ProgressEvent) => {
    //     if(evt.lengthComputable && onProgress){
    //         const percentComplete = (evt.loaded / evt.total)*100;
    //         onProgress(Math.round(percentComplete))
    //     }
    // };

    const validateFile = (file:File) =>{
        if(fileType === "video"){
            if(!file.type.startsWith("video")){
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
        return true
    }

    const handleFileChange = async (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];

    if (!file || !validateFile(file)) return;

    setUploading(true);
    setError(null);

    try {
      const authRes = await fetch("/api/imagekit-auth");
      const auth = await authRes.json();

      const res = await upload({
        file,
        fileName: file.name,
        publicKey: process.env.NEXT_IMAGEKIT_PUBLIC_KEY!,
        signature: auth.signature,
        expire: auth.expire,
        token: auth.token,
        onProgress: (event) => {
          if(event.lengthComputable && onProgress){
            const percent = (event.loaded / event.total) * 100;
            onProgress(Math.round(percent))
          }
        },
        
      });
      onSuccess(res)
    } catch (error) {
        console.error("Upload failed", error)
    } finally {
        setUploading(false)
    }
  };

    return (
        <div className="space-y-2">
            <input
                type="file"
                accept={fileType === "video" ? "video/*" : "image/*"}
                onChange={handleFileChange}
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