const mongoose = require('mongoose')

const VerificationSchema = new mongoose.Schema({
    email:{
        type: String,
        unique: true,
        required: true
    },
    email_verified:{
        type:Boolean,
        required: true,
    },
    email_verification_sent:{
        type:Boolean
    },
    email_verification_date:{
        type:Date
    },
    email_verification_expired:{
        type:Boolean
    }
})

const Verification = mongoose.model('Verification', VerificationSchema)

module.exports = Verification