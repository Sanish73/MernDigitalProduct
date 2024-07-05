import express from "express";
import { Product } from "../models/productModels.js";

const router = express.Router();

router.post('/', async (request, response) => {
    try {
        if (
            !request.body.name ||
            !request.body.priceInCents ||
            !request.body.image ||
            !request.body.category
        ) {
            return response.status(400).send({ message: 'Missing required fields' });
        }

       
        const newProduct ={
            name:request.body.name,
            priceInCents: request.body.priceInCents,
            image: request.body.image,
            category: request.body.category,
        };
        const product = await Product.create(newProduct);
        
        response.status(201).send(product);
    } catch (error) {
        response.status(500).json({ error: error.message });
    }
});

export default router;
