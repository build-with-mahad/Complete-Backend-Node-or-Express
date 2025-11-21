import { v2 as Cloudinary } from 'cloudinary'
import fs from "fs"
import dotenv from "dotenv"
dotenv.config({
    path: './env'
})
Cloudinary.config({
    cloud_name: process.env.CLOUDINARY_CLOUD_NAME,
    api_key: process.env.CLOUDINARY_API_KEY,
    api_secret: process.env.CLOUDINARY_API_SECRET
})
const uploadFile = async (localfilepath) => {
    try {
        if (!localfilepath) return null
        const response = await Cloudinary.uploader.upload(localfilepath, {
            resource_type: "auto",
        })
        fs.unlinkSync(localfilepath)
        return response;
    } catch (error) {
        fs.unlinkSync(localfilepath)
        return null
    }
}

export { uploadFile }