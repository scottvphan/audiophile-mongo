const mongoose = require('mongoose')
const Schema = mongoose.Schema

const userSchema = new Schema({
    name:{type:String},
    email:{type:String},
    entryDate: {type:Date, default:Date.now}
})

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

const Users = mongoose.model('Users', userSchema, 'users')
const Checkout = mongoose.model('Checkout', checkoutSchema, 'checkout_form')
const mySchemas = {'Users':Users, 'Checkout':Checkout}

module.exports = mySchemas