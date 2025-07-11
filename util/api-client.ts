import { VideoI } from "@/models/Video";

export type VideoData = Omit<VideoI, "_id">

type FetchOptions = {
    method?: "GET" | "POST" | "PUT" | "DELETE";
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    body?: any;
    headers?: Record<string, string>;
}

class ApiClient{
    private async fetch<T>(
        endpoint: string,
        options: FetchOptions = {}        
    ):Promise<T>{
        const {method = "GET",body,headers = {}} = options;
        const defaultHeaders = {
            "Content-Type": "application/json",
            ...headers,
        };

        const response = await fetch(`/api${endpoint}`, {
            method,
            headers: defaultHeaders,
            body: body ? JSON.stringify(body) : undefined,
        });

        if (!response.ok) {
            throw new Error(await response.text());
        }
        return response.json();
    }

    async getVideos(){
        return this.fetch<VideoI[]>("/videos");
    }

    async getVideo(id: string){
        return this.fetch<VideoI>(`/videos/${id}`);
    }

    async createVideo(videoData: VideoData) {
        return this.fetch<VideoI>("/videos", {
            method: "POST",
            body: videoData,
        });
    }
}

export const apiClient = new ApiClient;