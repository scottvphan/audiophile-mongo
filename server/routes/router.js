const express = require("express");
const router = express.Router();
const User = require("../models/User");
const Product = require("../models/Product");
const Rate = require("../models/Rate");
require("dotenv/config");

const Shipengine = require("shipengine");
const shipengine = new Shipengine(process.env.SE_URI);

const app = express();
app.use(express.json());

async function getRatesWithShipmentDetails(userData) {
    const params = {
        rateOptions: {
            carrierIds: [ "se-5035034", ],
        },
        shipment: {
            validateAddress: "no_validation",
            shipTo: {
                name: userData.name ? userData.name : undefined,
                phone: userData.phoneNumber ? userData.phoneNumber : undefined,
                addressLine1: userData.address.street,
                cityLocality: userData.address.city,
                stateProvince: userData.address.state,
                postalCode: userData.address.zipcode,
                countryCode: userData.address.country,
                addressResidentialIndicator: "yes",
            },
            shipFrom: {
                companyName: "Audiophile",
                name: "John Doe",
                phone: "111-111-1111",
                addressLine1: "4009 Marathon Blvd",
                addressLine2: "Suite 300",
                cityLocality: "Austin",
                stateProvince: "TX",
                postalCode: "78756",
                countryCode: "US",
                addressResidentialIndicator: "no",
            },
            packages: userData.items,
        },
    };

    try {
        const result = await shipengine.getRatesWithShipmentDetails(params);
        return result
    } catch (e) {
        console.log(e.message);
    }
}

router.get("/data", (req, res) => {
    Product.findOne().then((product) => {
        if (!product) {
            res.status(404).json({ message: "Products not found" });
        } else {
            const productData = product;
            res.json(productData);
        }
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

router.get("/rates", async (req, res) => {
    const data = req.query.form
    const mappedCart = data.cart.map(data =>{
        return {
            weight: {
                value: data.weight * data.quantity,
                unit: "pound",
            },
        }
    })
    const userData = ({
        address:{
            street: data.address.street,
            zipcode: data.address.zipcode,
            city: data.address.city,
            country: data.address.country,
            state: data.address.state,
        },
        items:mappedCart
    })
    try{
        const shippingRate = await getRatesWithShipmentDetails(userData)
        res.json( {shippingRate} )
    } catch ( error ) {
        console.log( error )
    }
})

router.post("/order", async(req, res) => {
    const userData = ({
        name,
        email,
        phoneNumber,
        address,
        credit,
        cash,
        cart,
    } = req.body[0]);
    const accountEmail = req.body[1];
    // try {
    //     const shippingRate = await getRatesWithShipmentDetails(userData)
    //     res.json( {shippingRate} )
    // } catch (error) {
    //     console.log(error)
    //     return res.status(500).json({ error: "Internal Server Error" })
    // }
    
    // User.findOneAndUpdate(
    //     { email: accountEmail },
    //     { $set: { orders: userData } },
    //     { new: true }
    // )
    //     .then((updatedUser) => {
    //         res.sendStatus(200);
    //     })
    //     .catch((err) => {
    //         console.error(err);
    //         res.sendStatus(500);
    //     });
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

router.post("/cart", (req, res) => {
    const cartData = req.body[0];
    const accountEmail = req.body[1];
    User.findOneAndUpdate(
        { email: accountEmail },
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

module.exports = router;
