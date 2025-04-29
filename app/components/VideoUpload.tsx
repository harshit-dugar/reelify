"use client"

import { useState } from "react";
import { useForm } from "react-hook-form";
import FileUpload from "./FileUpload";
import { IKUploadResponse } from "imagekitio-next/dist/types/components/IKUpload/props";
import { apiClient } from "@/util/api-client";

interface VdieoData{
    title: string,
    description: string;
    videoUrl: string;
}

export default function VideoUpload(){

    const [loading,setLoading] = useState(false);
    const [UploadProgress, setUploadProgress] = useState(0);

    const {
        register, handleSubmit, setValue, formState:{errors}
    } = useForm<VdieoData>({
        defaultValues:{
            title:"",
            description:"",
            videoUrl:""
        }
    })

    const handleUploadSucccess = (res: IKUploadResponse) => {
        setValue("videoUrl",res.filePath);
    }

    const handleUploadProgress = (progress: number) => {
        console.log("Upload Progress",progress);
        
        setUploadProgress(progress);
    };

    const onSubmit = async (data:VdieoData) =>{
        if(!data.videoUrl){
            alert("Please upload a video");
            return;            
        }
        setLoading(true);
        try {
            //upload video 
            await apiClient.createVideo(data);
            alert("Video uploaded successfully");
            setLoading(false);
            setUploadProgress(0);
            setValue("title","");
            setValue("description","");
            setValue("videoUrl","");   
            //rediect to dashboard
            window.location.href = "/dashboard";             
        } catch (error) {
            console.log(error);
            alert("Video upload failed");
            setLoading(false);
            setUploadProgress(0);            
        }
    }
    return(
        <div className="flex h-screen items-center justify-center">
            <form onSubmit={handleSubmit(onSubmit)} className="flex flex-col gap-4   p-4 shadow-[3px_4px_6px_0px_rgba(0,_0,_0,_0.7)]">
                <div className="flex flex-col gap-2">
                    <label className="text-lg font-semibold">Title</label>
                    <input
                        type="text"
                        placeholder="Title"
                        {...register("title",{required:true})}
                        className="border border-gray-300 p-2 rounded-md"
                    />
                    {errors.title && <span className="text-red-500">Title is required</span>} 
                </div>
                <div className="flex flex-col gap-2">
                    <label className="text-lg font-semibold">Description</label>               
                    <input
                        type="text"
                        placeholder="Description"
                        {...register("description",{required:true})}
                        className="border border-gray-300 p-2 rounded-md"
                    />
                    {errors.description && <span className="text-red-500">Description is required</span>}
                </div>
                <div className="flex flex-col gap-2">
                    <label className="text-lg font-semibold"> Upload Video</label>
                    <FileUpload                         
                        onSuccess={handleUploadSucccess}
                        onProgress={handleUploadProgress}
                        fileType="video"
                    />
                    {UploadProgress > 0 && (
                        <div className="w-full bg-gray-200 rounded-full h-2.5 mt-2">
                        <div
                            className="bg-primary h-2.5 rounded-full transition-all duration-300"
                            style={{ width: `${UploadProgress}%` }}
                        />
                        </div>
                    )}
                </div>
                <button 
                    type="submit" 
                    disabled={loading} 
                    className={`bg-blue-500 text-white p-2 rounded-md ${loading ? "opacity-50 cursor-not-allowed" : ""}`}
                >
                    {loading ? "Uploading..." : "Upload Video"}
                </button>
            </form>
        </div>
    )
}