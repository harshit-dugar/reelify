
import {VideoI} from "@/models/Video";
import { IKVideo } from "imagekitio-next";
import Link from "next/link";

export default function VideoComponent({video}: {video: VideoI}){
    return (
        <div>
            <Link href={`/videos/${video._id}`}>
                <div className="flex flex-col items-center justify-center">
                <IKVideo
                    path={video.videoUrl}
                    transformation={[
                        {
                        height: "1920",
                        width: "1080",
                        },
                    ]}
                    controls={video.control}
                    className="w-full h-full object-cover"
                />
                </div>
            </Link>
            <div className="flex flex-col items-center justify-center mt-2">
                <h2 className="text-lg font-bold">{video.title}</h2>
                <p className="text-sm text-gray-500">{video.description}</p>
            </div>
        </div>
    )
}