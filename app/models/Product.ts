import { Schema, model, models } from "mongoose";

const ProductSchema = new Schema({
    title: {
        type: String,
        required: true
    },
    subTitle: {
        type: String,
        required: true
    },
    src: {
        type: String,
        required: true
    },
    rating: {
        type: Number,
        required: true
    },
    reviews: {
        type: Number,
        required: true
    },
    price: {
        type: Number,
        required: true
    },
    discount: {
        type: Number,
        required: true
    },
    details: {
        type: String,
        required: true
    } ,
    brand: {
        type: String,
        required: true 
    }
},
{
    timestamps: true
});

const Product = models.Product || model("Product", ProductSchema);

export default Product;
