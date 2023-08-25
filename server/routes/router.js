const express = require("express");
const router = express.Router();
const User = require("../models/User");
const Product = require("../models/Product");
const Rate = require("../models/Rate");
const Token = require("../models/Token")
const axios = require("axios");
require("dotenv/config");
const { requiresAuth } = require("express-openid-connect");

const Shipengine = require("shipengine");
const Verification = require("../models/Verification");
const shipengine = new Shipengine(process.env.SE_URI);
const { auth, requiredScopes } = require('express-oauth2-jwt-bearer')

const checkJwt = auth({
    audience: 'https://audiophile-api/',
    issuerBaseURL: 'https://dev-g4y2r5dknwja6vmn.us.auth0.com/',
});

const app = express();
app.use(express.json());

async function getRatesWithShipmentDetails(userData) {
    const params = {
        rateOptions: {
            carrierIds: ["se-5035034",],
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

router.get("/check-token:email", async (req, res) => {
    try {
        const userEmail = req.params.email

        const existingToken = await Token.findOne({ user: userEmail, expiresAt: { $gt: new Date() } });

        if (existingToken) {
            res.json({ token: existingToken.token });
        } else {
            res.json({ token: '' })
        }

    } catch (e) {
        console.log(e.message)
    }
})

router.get("/auth-access:email", async (req, res) => {
    try {
        const userEmail = req.params.email;

        const existingToken = await Token.findOne({ user: userEmail, expiresAt: { $gt: new Date() } });

        if (!existingToken) {
            const options = {
                method: 'POST',
                url: 'https://dev-g4y2r5dknwja6vmn.us.auth0.com/oauth/token',
                headers: {
                    'Content-Type': 'application/json',
                },
                data: {
                    client_id: 'sDgeKBnHtQNUWpf8atarxYXKdefP5jsV',
                    client_secret: 'Fv-v42oZoAGfsGt1mmztmqgnpSXqVIka_5-3uLrh1nScWpBlTDYjaTmdaOVtn9RS',
                    audience: 'https://dev-g4y2r5dknwja6vmn.us.auth0.com/api/v2/',
                    grant_type: 'client_credentials',
                },
            };

            const response = await axios(options);

            const token = response.data.access_token;
            const expirationTime = new Date();
            expirationTime.setHours(expirationTime.getHours() + 24);

            const newTokenDocument = new Token({
                user: userEmail,
                token: token,
                expiresAt: expirationTime,
            });

            await newTokenDocument.save();

            res.json({ token });
        }
    } catch (error) {
        console.error(error);
        res.status(500).json({ error: 'An error occurred' });
    }
});

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
    const mappedCart = data.cart.map(data => {
        return {
            weight: {
                value: data.weight * data.quantity,
                unit: "pound",
            },
        }
    })
    const userData = ({
        address: {
            street: data.address.street,
            zipcode: data.address.zipcode,
            city: data.address.city,
            country: data.address.country,
            state: data.address.state,
        },
        items: mappedCart
    })
    try {
        const shippingRate = await getRatesWithShipmentDetails(userData)
        res.json({ shippingRate })
    } catch (error) {
        console.log(error)
    }
})

router.post("/orders", async (req, res) => {
    const userData = ({
        name,
        email,
        phoneNumber,
        address,
        cart,
        credit,
        cash,
        shippingPrice,
        totalPrice,
    } = req.body[0]);
    const accountEmail = req.body[1];

    User.findOneAndUpdate(
        { email: accountEmail },
        { $push: { orders: userData } },
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

router.post("/verification", async (req, res) => {
    try{

        const userData = req.body[0]
        const userEmail = req.body[1]
        const authToken = req.body[2]
        const options = {
            method: "GET",
            url: "https://dev-g4y2r5dknwja6vmn.us.auth0.com/api/v2/users-by-email",
            params: { email: userEmail },
            headers: {
                authorization:
                    `Bearer ${authToken}`,
            },
        };

        const existingToken = await Token.findOne({
            userEmail: userEmail,
            expiresAt: { $gt: new Date() },
        });

        const response = axios.request(options)
        const userId = response.data[0].user_id
    
        const emailOptions = {
            method: "POST",
            url: "https://dev-g4y2r5dknwja6vmn.us.auth0.com/api/v2/jobs/verification-email",
            headers: {
                authorization: `Bearer ${authToken}`,
                "Content-Type": "application/json",
            },
            data: {
                user_id: userId,
                client_id: process.env.CLIENT_ID,
                identity: {
                    user_id: userData.identities[0].user_id,
                    provider: userData.identities[0].provider,
                },
            },
        };
        
        if(!existingToken){
            await axios.request(emailOptions)
            res.status(200).json({message: "Verification email sent successfully"})
        } else{
            res.status(200).json({message: "An email was already sent"})
        }
    } catch (error){
        console.log(error)
        res.status().json({error: "An error occured"})
    }
})

router.get("/verification-check:email", async (req, res) => {
    try{

        const userData = req.body[0]
        const userEmail = req.body[1]
        const authToken = req.body[2]
        const options = {
            method: "GET",
            url: "https://dev-g4y2r5dknwja6vmn.us.auth0.com/api/v2/users-by-email",
            params: { email: userEmail },
            headers: {
                authorization:
                    `Bearer ${authToken}`,
            },
        };

        const existingToken = await Token.findOne({
            userEmail: userEmail,
            expiresAt: { $gt: new Date() },
        });

        const response = axios.request(options)
        const userId = response.data[0].user_id
    
        const emailOptions = {
            method: "POST",
            url: "https://dev-g4y2r5dknwja6vmn.us.auth0.com/api/v2/jobs/verification-email",
            headers: {
                authorization: `Bearer ${authToken}`,
                "Content-Type": "application/json",
            },
            data: {
                user_id: userId,
                client_id: process.env.CLIENT_ID,
                identity: {
                    user_id: userData.identities[0].user_id,
                    provider: userData.identities[0].provider,
                },
            },
        };
        
        if(!existingToken){
            await axios.request(emailOptions)
            res.status(200).json({message: "Verification email sent successfully"})
        } else{
            res.status(200).json({message: "An email was already sent"})
        }
    } catch (error){
        console.log(error)
        res.status().json({error: "An error occured"})
    }
})

module.exports = router;
