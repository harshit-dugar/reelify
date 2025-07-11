import VideoComponent from "./VideoComponent";
import { VideoI } from "@/models/Video";

interface VideoFeedType {
    videos: VideoI[];
}


export default function VideoFeed({ videos }: VideoFeedType) {
    return(
        <>
            {videos.map((video) => (
                <VideoComponent key={video.videoUrl?.toString()} video={video} />
            ))}
        </>
    )
}