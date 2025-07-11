const express = require('express');
const sellerProductRouter = express.Router();
const { authenticate } = require('../middleware/auth');
const { createSellerProduct } = require('../controllers/sellerProductController');

// Route: POST /api/seller/products
sellerProductRouter.post("/", authenticate, createSellerProduct);

module.exports = sellerProductRouter;
