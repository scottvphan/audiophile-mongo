const express = require("express");
const router = express.Router();
const mongoose = require("mongoose");
const dotenv = require("dotenv");
const User = require("../models/User");
const Product = require("../models/Product");

const app = express();
app.use(express.json());

router.post("/form", (req, res) => {
    const userData = ({ name, email, phoneNumber, address } = req.body);
    const user = new User({
        name: userData.name,
        email: userData.email,
        phoneNumber: userData.phoneNumber,
        address: userData.address,
    });
});

router.post("/user", (req, res) => {
    const userData = ({ name, email } = req.body);

    User.findOne({ email }).then((existingUser) => {
        if (existingUser) {
            res.send({ message: "User already exists" });
        } else {
            const user = new User({
                name: userData.name,
                email: userData.email,
            });
            user.save()
                .then((results) => {
                    console.log(results);
                    res.send(results);
                })
                .catch((err) => {
                    console.log(err);
                });
        }
    });
});

router.get("/data", (req, res) => {
    Product.findOne()
        .then((product) => {
            if(!product){
                res.status(404).json( {message: "Products not found"} )
            } else {
                const productData = product
                res.json(productData)
            }
        })
});

router.post("/cart", (req, res) => {
    const cartData = req.body[0];
    const userEmail = req.body[1];
    User.findOneAndUpdate(
        { email: userEmail },
        { $set: { cart: Object.values(cartData) } },
        { new: true }
    )
        .then((updatedUser) => {
            res.sendStatus(200);
        })
        .catch((err) => {
            console.error(err);
            res.sendStatus(500);
        });
});

router.get("/cart/:email", (req, res) => {
    const userEmail = req.params.email;
    User.findOne({ email: userEmail })
        .then((user) => {
            if (!user) {
                res.status(404).json({ message: "User not found" });
            } else {
                const cartData = user.cart;
                res.json(cartData);
            }
        })
        .catch((err) => {
            console.error(err);
            res.status(500).json({ message: "Internal Server Error" });
        });
});

module.exports = router;
