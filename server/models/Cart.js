const mongoose = require("mongoose");
const Schema = mongoose.Schema;
const CartSchema = new Schema({
    name: String,
    image: String,
    quantity: Number,
    price: Number,
    total: Number,
    id: Number,
});

const Cart = mongoose.model("Cart", CartSchema);

module.exports = Cart;