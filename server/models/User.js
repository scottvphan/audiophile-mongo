const mongoose = require("mongoose");

const UserSchema = new mongoose.Schema(
    {
        name: {
            type: String,
        },
        email: {
            type: String,
        },
        entryDate: {
            type: Date,
            default: Date.now,
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
    },
    { timestamps: true }
);

const User = mongoose.model("Users", UserSchema);

module.exports = User;
