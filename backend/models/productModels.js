import mongoose from "mongoose";

const productSchema = mongoose.Schema({

    name: {
        type: String,
        required: true
    },
    priceInCents: {
        type: String,
        required: true
    },
    image: {
        type: String,
        required: true
    },
    category: {
        type: String,
        required: true,
        enum: ["course", "template"]

    }
});

export const Product = mongoose.model("Product" ,productSchema)