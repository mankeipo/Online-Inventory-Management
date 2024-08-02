const express = require('express');
const router = express.Router();
const productController = require('./product');
const transactionController = require('./transaction');

router.use('/products', productController);
router.use('/transactions', transactionController);

module.exports = router;