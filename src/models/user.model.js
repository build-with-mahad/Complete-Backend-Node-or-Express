import mongoose, { Schema } from "mongoose"
const UserSchema = new Schema({
    username: {
        type: String,
        required: true,
        unique: true,
        lowercase: true,
        index: true
    },
    email: {
        type: String,
        required: true,
        unique: true,
    },
    password: {
        type: String,
        required: [true, "Password is Required!.."]
    },
    fullname: {
        type: String,
        required: true,
        lowercase: true
    },
    avatar: {
        type: String, //Cloudinary URL
        required: true
    },
    CoverImage: {
        type: String, //Cloudinary URL
    },
    refreshToken: {
        type: String,
        required: true
    },
    watchHistory: [
        {
            type: Schema.Types.ObjectId,
            ref: "Video"
        }
    ]
}, {
    timestamps: true
})
export const User = mongoose.model("User",UserSchema)