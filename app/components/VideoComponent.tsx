
import {VideoI} from "@/models/Video";
// import Link from "next/link";
import {Video} from '@imagekit/next';

export default function VideoComponent({video}: {video: VideoI}){
    return (
        <div className="w-full px-4 md:px-8 py-4 overflow-y-scroll">
            {/* <Link href={`/${video.videoUrl}`}> */}
                <div className="flex flex-col items-center justify-center ">
                    <div className="aspect-[10/13] w-full sm:max-w-xs md:max-w-sm lg:max-w-md xl:max-w-lg mx-auto ">
                    <Video
                        urlEndpoint="https://ik.imagekit.io/harshit21"
                        src={`/${video.videoUrl}`}
                        controls
                        className="w-full h-full object-contain"
                    />
                    </div>
                </div>
            {/* </Link> */}
            <div className="flex flex-col items-center justify-center mt-2">
                {/* <p className="text-sm md:text-base text-gray-500">By:{video.uploadedBy}</p> */}
                <h2 className="text-lg md:text-xl font-bold">{video.title}</h2>
                <p className="text-sm md:text-base text-gray-500">{video.description}</p>
            </div>
        </div>
    )
}