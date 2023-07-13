const mongoose = require('mongoose')
const Schema = mongoose.Schema

const checkoutSchema = new Schema({
    name: {type:String},
    email: {type:String},
    phoneNumber: {type:String},
    address: {
        street:{type:String},
        zipcode: {type:String},
        city: {type:String},
        country: {type:String},
    }
})

const cartSchema = new Schema({
    name: {type:String},
    quantity: {type:Number},
    price: {type:Number}, 
    total: {type:Number},
})

const Checkout = mongoose.model('Checkout', checkoutSchema, 'checkout_form')

export default checkoutSchema