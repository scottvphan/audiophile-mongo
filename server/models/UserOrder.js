const mongoose = require("mongoose")

const UserOrderSchema = new mongoose.Schema({
    name: {
        type: String,
    },
    email: {
        type: String,
    },
    phoneNumber: {
        type: String,
    },
    address: {
        type: String,
    }
}, { timestamps: true })

const UserOrder = mongoose.model("UserOrder", UserOrderSchema)

module.exports = UserOrder