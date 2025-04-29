"use client"

import { useEffect, useState } from "react";
import VideoFeed from "../components/VideoFeed"
import VideoUpload from "../components/VideoUpload"
import { VideoI } from "@/models/Video";
import { apiClient } from "@/util/api-client";

export default function Dashboard(){
    const [videos, setVideos] = useState<VideoI[]>([]);

    useEffect(() =>{
        const fetchVideos = async () => {
            try {
                const data = await apiClient.getVideos();
                setVideos(data);
            } catch (error) {
                console.error("Error fetching videos:", error);
            }
        };
        fetchVideos();
    },[])

    return (
        <>
            <div className="flex flex-row items-center justify-around mt-4">
                <VideoFeed videos={videos} />
                <VideoUpload />
            </div>
        </>
    )
}