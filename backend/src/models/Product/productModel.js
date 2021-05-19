const mongoose = require('mongoose');
const schema = mongoose.Schema;

const productSchema = new schema({
    name: {
        type: String
    },
    brand: {
        type: String
    },
    price: {
        type: String
    },
    img: {
        type: String
    },
    size: {
        type: String
    },
    color: {
        type: String
    }
}, {timestamps: true});

const product = mongoose.model('product', productSchema);
module.exports = product;