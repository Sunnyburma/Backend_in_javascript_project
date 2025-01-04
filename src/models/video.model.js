import mongoose, { SchemaType } from "mongoose";
import mongooseAggregatePaginate from "mongoose-aggregate-paginate-v2";
const videoSchema = new Schema(
    {
        vedioFile:{
            type:String,            // cloudinary url
            required:true,
        },
        thumbnail:{
            type:String,              //cloudinary url
            required:true,
        },
        title:{
            string:true,
            required:true,
        },
        description:{
            type:string,
            required:true,
        },
        duration:{
            type:Number,
            required:true,
        },
        views:{
            type:Number,
            default:0,
        },
        isPublished:{
            type:Boolean,   
        },
        owner:{
            type:Schema.Types.objectId,
            ref:"user"
        }
    },
    {
        timestamps:true,
    }
)
videoSchema.plugin(mongooseAggregatePaginate)
export const video = mongoose.model("video",videoSchema)
