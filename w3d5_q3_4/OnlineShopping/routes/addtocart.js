const express = require('express');
const cartController = require('../controller/cart');
const router = express.Router();

router.post('/', cartController.addToCart);

module.exports = router;