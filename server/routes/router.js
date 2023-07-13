const express = require("express");
const router = express.Router();
const mongoose = require("mongoose");
const dotenv = require("dotenv");
const User = require("../models/User");
const Product = require("../models/Product");
// const { MongoClient } = require("mongob")

// async function run() {
//     try{
//         await client.connect()
//         const db = client.db("users")
//         const coll = db.collection()
//     } finally{
//         await client.close()
//     }
// }
const app = express();
app.use(express.json());
// const db = mongoose.createConnection();

router.post("/form", (req, res) => {
    const userData = ({ name, email, phoneNumber, address } = req.body);
    const user = new User({
        name: userData.name,
        email: userData.email,
        phoneNumber: userData.phoneNumber,
        address: userData.address,
    });
    // console.log(userData);
    // console.log(user);
    // user.save()
    //     .then((results) =>{
    //         console.log(results)
    //         res.send(results)
    //         console.log('sending data')
    //     })
    //     .catch((err) => {
    //         console.log(err)
    //     })
});

router.post("/user", (req, res) => {
    const userData = ({ name, email } = req.body);

    User.findOne({ email }).then((existingUser) => {
        if (existingUser) {
            console.log("User already exists");
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

router.post("/cart", (req, res) => {
    const cartData = req.body[0];
    const userEmail = req.body[1];
    console.log(cartData);
    User.findOneAndUpdate(
        { email: userEmail },
        { $set: { cart: Object.values(cartData) } },
        { new: true }
    )
        .then((updatedUser) => {
            console.log("User cart updated:", updatedUser.cart);
            res.sendStatus(200);
        })
        .catch((err) => {
            console.error(err);
            res.sendStatus(500);
        });
});

router.get("/data", (req, res) => {
    Product.findOne()
        .then((product) => {
            if(!product){
                res.status(404).json( {message: "Products not found"} )
            } else {
                const productData = product
                console.log(product)
                res.json([productData])
            }
        })
});


router.get("/cart/:email", (req, res) => {
    const userEmail = req.params.email;
    console.log(userEmail)
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
