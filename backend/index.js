import express from "express"
import { config } from "dotenv"
import mongoose from "mongoose"
import cors from "cors"
import {v2 as cloudinary} from "cloudinary"
// import multer from "multer"
import pkg from 'multer-storage-cloudinary';
import productRoute from "./routes/productRoute.js"

config();

const app = express();
app.use(cors());

app.listen(process.env.PORT , ()=>

console.log(`Server is running on port ${process.env.PORT}`)
);



    const mongoURI = process.env.mongoDb;

        mongoose.connect(mongoURI)
        .then(() => console.log('MongoDB connected'))
        .catch(err => console.log('MongoDB connection error: ', err));


    app.use(express.json());
    app.use('./product',productRoute);