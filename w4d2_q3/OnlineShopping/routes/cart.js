const express = require('express');
const cartController = require('../controller/cart');
const router = express.Router();

router.get('/', cartController.getCart);

module.exports = router;