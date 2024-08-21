const Coin = require('../models/coinModel');

// Get the current coin count
exports.getCoinCount = async (req, res) => {
    try {
        const coin = await Coin.findOne();
        if (!coin) {
            return res.status(404).json({ message: 'Coin data not found' });
        }
        res.json({ count: coin.count });
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

// Increase the coin count
exports.addCoin = async (req, res) => {
    try {
        let coin = await Coin.findOne();
        if (!coin) {
            coin = new Coin();
        }

        coin.count += 1;
        await coin.save();
        res.json({ message: 'Coin count updated', count: coin.count });
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};
