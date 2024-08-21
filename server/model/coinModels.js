const mongoose = require('mongoose');

const coinSchema = new mongoose.Schema({
    count: {
        type: Number,
        required: true,
        default: 0,
    },
});

const Coin = mongoose.model('Coin', coinSchema);

module.exports = Coin;
