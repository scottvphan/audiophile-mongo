const mongoose = require("mongoose");

const RateSchema = {
    carrier_ids: Array,
    from_country_code: String,
    from_postal_code: String,
    from_city_locality: String,
    from_state_province: String,
    to_country_code: String,
    to_postal_code: String,
    to_city_locality: String,
    to_state_province: String,
    weight: {
        value: Number,
        unit: String,
    },
    dimensions: {
        length: Number,
        width: Number,
        height: Number,
        unit: String,
    }
};
