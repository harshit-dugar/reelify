
import {VideoI} from "@/models/Video";
import { IKVideo } from "imagekitio-next";
import Link from "next/link";
import {Video} from '@imagekit/next';

export default function VideoComponent({video}: {video: VideoI}){
    return (
        <div className="w-full px-4 md:px-8 py-4">
            {/* <Link href={`/${video.videoUrl}`}> */}
                <div className="flex flex-col items-center justify-center ">
                    <div className="w-full max-w-xl aspect-video">
                    <Video
                        urlEndpoint="https://ik.imagekit.io/harshitdugar"
                        src={`/${video.videoUrl}`}
                        controls
                        className="w-full h-full object-contain"
                    />
                    </div>
                </div>
            {/* </Link> */}
            <div className="flex flex-col items-center justify-center mt-2">
                <h2 className="text-lg md:text-xl font-bold">{video.title}</h2>
                <p className="text-sm md:text-base text-gray-500">{video.description}</p>
            </div>
        </div>
    )
}