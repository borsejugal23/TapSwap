const express = require('express');
const { getCoinCount, addCoin } = require('../controllers/coinController');

const router = express.Router();

// GET request to fetch the coin count
router.get('/', getCoinCount);

// POST request to increment the coin count
router.post('/add', addCoin);

module.exports = router;
