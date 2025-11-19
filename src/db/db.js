import dotenv from "dotenv"
import mongoose from "mongoose"
import { DB_NAME } from "../constants.js"
dotenv.config({
    path: './env'
})

const connectDb = async () => {
    try {
        const connection = await mongoose.connect(`${process.env.MONGODB_URL}${DB_NAME}`)
        console.log(`Mongo DB Connected Successfully!.. ${connection.connection.host}`)
    } catch (error) {
        console.log(`MongoDB not Connected..`, error)
    }
}
export { connectDb }

//with IIFE
// (async function db() {

//     try {
//         const connect = await mongoose.connect(`${process.env.MONGODB_URL}${DB_NAME}`)
//         console.log(`Mondo Db connected Successfully !.. ${connect.connection.host}`)
//         console.log(`Mongo Db connected successfully !..`)
//         app.on('error', (error) => {
//             console.log('ERROR', error)
//         })
//         app.listen(process.env.PORT, () => {
//             console.log(`Server is running on the port ${process.env.PORT}`)
//         })
//     } catch (error) {
//         console.log('Error', error)
//         throw error
//     }


// })()