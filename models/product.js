const mongoose = require("mongoose");

const productSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true,
    },
    price: {
        type: String,
        required: true,

    },
    measurment_unit: {
        type: String,
        required: true,
    },
    category: {
        type: String,
        required: true,
    },
    colors:
        [
            {
                _id: String,
                value: String
            },

        ],

    sizes:
        [
            {
                _id: String,
                value: String
            },
        ],
});

module.exports = mongoose.model('Product', productSchema, 'products');

