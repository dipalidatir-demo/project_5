const mongoose = require("mongoose")

const productSchema = new mongoose.Schema({

    title: {
        type: String,
        required: true,
        unique: true,
        trim: true,
        lowercase: true
    },

    description: {
        type: String,
        required: true,
        trim: true
    },

    price: {
        type: Number,
        required: true,
        trim: true
    },

    currencyId: {
        type: String,
        required: true, //INR
        trim: true
    },

    currencyFormat: {
        type: String,
        required: true, // ₹
        trim: true
        // enum: "₹"
    },

    isFreeShipping: {
        type: Boolean,
        default: false
    },

    productImage: {
        type: String,
        required: true
    },  // s3 link

    style: {
        type: String,
        trim: true
    },

    availableSizes: {
        type: [String],
        trim: true
    },

    installments: {
        type: Number,
        trim: true
    },

    deletedAt: {
        type: Date,
        default: null
    },

    isDeleted: {
        type: Boolean,
        default: false
    }
}, { timestimes: true })

module.exports = mongoose.model("product", productSchema) 
