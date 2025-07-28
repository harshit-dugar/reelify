"use client"

import { useEffect, useState } from "react";
import VideoFeed from "../components/VideoFeed"
import VideoUpload from "../components/VideoUpload"
import { VideoI } from "@/models/Video";
import { apiClient } from "@/util/api-client";
import DashNav from "../components/Navbar/DashNav";

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
            <DashNav />
            <div className="flex flex-col md:flex-row items-start md:items-center justify-center gap-2 mt-4 px-4 pt-12">
                <div className="w-full md:w-2/3">
                    <VideoFeed videos={videos} />
                </div>
                <div className="w-full md:w-1/3">
                    <VideoUpload />
                </div>
            </div>
        </>
    )
}