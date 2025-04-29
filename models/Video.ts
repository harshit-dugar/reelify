import mongoose from "mongoose";

export const VIDEO_DIMENSION = {
    width: 1280,
    height: 1920
} as const;

export interface VideoI {
    title: string;
    description: string;
    videoUrl: string;
    _id?: mongoose.Types.ObjectId;
    createdAt?: Date;
    control?: boolean;
    transformation?:{
        width: number;
        height: number;
        quality?: number;
    }
}

const VideoSchema = new mongoose.Schema<VideoI>({
    title: {type: String, required: true},
    description: {type: String, required: true},
    videoUrl: {type: String,required: true},
    control: {type: Boolean, default: false},
    transformation: {
        width: {type: Number, required: true,default: VIDEO_DIMENSION.width},
        height: {type: Number, required: true, default: VIDEO_DIMENSION.height},
        quality: {type: Number}
    }
});

const Video = mongoose.model<VideoI>("Video", VideoSchema);

export default Video;