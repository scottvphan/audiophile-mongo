const mongoose = require("mongoose");

const tokenSchema = new mongoose.Schema({
    user: { type: String, unique: true },
    token: String,
    expiresAt: { type: Date, index: { expires: '24h' } }
})

const Token = mongoose.model('Token', tokenSchema);

module.exports = Token;