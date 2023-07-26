const mongoose = require('mongoose');

const productSchema = mongoose.Schema ({
    title: {
        type: String,
        required: [true, "Please enter Product name!!!"]
    },
    price: {
        type: Number,
        required: true,
    },
    category: {
        type: String,
        required: true,
    },
    oldPrice: {
        type: Number,
        required: true,
    },
    description: {
        type: String,
        required: true,
    },
    image: {
        type: String,
        required: true
    }
})

const Product = mongoose.model("Product", productSchema);
module.exports = Product;