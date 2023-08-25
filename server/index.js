const express = require("express");
const cors = require("cors");
const bodyParser = require("body-parser");
const router = require("./routes/router");
const mongoose = require("mongoose");
require("dotenv/config");
const app = express();
const { auth, requiredScopes } = require('express-oauth2-jwt-bearer')

const checkJwt = auth({
    audience: 'https://audiophile-api/',
    issuerBaseURL: 'https://dev-g4y2r5dknwja6vmn.us.auth0.com/',
});

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

const corsOptions = {
    origin: "*",
    credentials: true,
    optionSuccessStatus: 200,
};
app.use(cors(corsOptions));
app
    .use(bodyParser.json())
    .use((req, res, next) => {
        res.setHeader('Access-Control-Allow-Origin', '*');
        next();
    })
    .use("/", router);

const port = process.env.PORT;

app.get('/api/public', (req, res) => {
    res.json({
        message: 'Hello from a public endpoint! You don\'t need to be authenticated to see this.'
    })
})

app.get('/api/private', checkJwt, (req, res) => {
    res.json({
        message: 'Hello from a private endpoint! You need to be authenticated to see this.'
    });
});


const checkScopes = requiredScopes('read:messages')

app.get('/api/private-scoped', checkJwt, checkScopes, (req, res) => {
    res.json({
        message: 'Hello from a private endpoint! You need to be authenticated to and have a scope of read:messages to see this.'
    })
})

mongoose.connect(process.env.DB_URI, {}).then(() => {
    app.listen(port, () => console.log(`Mongoose Is Connected On Port: ${port}`));
});
