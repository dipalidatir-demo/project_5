const mongoose = require("mongoose")
const ObjectId = mongoose.Schema.Types.ObjectId

const orderSchema = new mongoose.Schema({

    userId: {
        type: ObjectId,
        ref: "user",
        required: true
    },

    items: [{
        productId: {
            type: ObjectId,
            ref: "product",
            require: true
        },
        quantity: {
            type: Number,
            require: true,
            defult: 1
        },
    }],

    totalPrice: {
        type: Number,
        required: true
    },

    totalItems: {
        type: Number,
        required: true
    },

    totalQuantity: {
        type: Number,
        required: true
    },
    cancellable: {
        type: Boolean,
        default: true
    },
    status: {
        type: String,
        default: "pending",
        enum: ["pending", "completed", "canceled"]
    },

    deletedAt: {
        type: Date,
        default: null
    },

    isDeleted: {
        type: Boolean,
        default: false
    },


}, { timestamps: true })

module.exports = mongoose.model("order", orderSchema);

