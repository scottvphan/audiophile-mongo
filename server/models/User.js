const mongoose = require("mongoose");

const UserSchema = new mongoose.Schema(
    {
        name: {
            type: String,
        },
        email: {
            type: String,
        },
        cart: [
            {
                name: String,
                image: String,
                quantity: Number,
                price: Number,
                total: Number,
                id: Number,
            },
        ],
        orders: [
            {
                name: String,
                email: String,
                phoneNumber: String,
                address: {
                    street: String,
                    zipcode: String,
                    city: String, 
                    country: String,
                    state: String, 
                },
                cart: Array,
                credit: Boolean,
                cash: Boolean,
                entryDate: {type:Date, default:Date.now}
            },
        ],
    },
    { timestamps: true }
);

const User = mongoose.model("Users", UserSchema);

module.exports = User;
