const express = require('express');
const CartRouter = express.Router();
const { authenticate } = require('../middleware/auth');
const { getCart, addToCart, removeFromCart } = require('../controllers/cartController');

CartRouter.get("/", authenticate, getCart);
CartRouter.post("/add", authenticate, addToCart);
CartRouter.delete("/remove/:productId", authenticate, removeFromCart);

module.exports = CartRouter;
