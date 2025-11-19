import { connectDb } from "./db/db.js";
import express from "express"
import dotenv from "dotenv"
dotenv.config({
    path: './env'
})

const app = express()
connectDb()
    .then(() => {
        try {
            app.listen(process.env.PORT, () => {
                console.log(`Server is Running on the port ${process.env.PORT}`);
            })
                .on('error', (error) => {
                    console.log('Error', error)
                })
        } catch (error) {
            console.log(`Mongo Db connection failed!...`, error)
        }
    })