const express = require('express');
const { authenticate } = require('../middleware/auth');
const { getCart, addToCart, removeFromCart, decreaseQuantity } = require('../controllers/cartController');

const CartRouter = express.Router();

CartRouter.get("/", authenticate, getCart);
CartRouter.post("/add", authenticate, addToCart);
CartRouter.post("/decrease", authenticate, decreaseQuantity);
CartRouter.delete("/remove/:productId", authenticate, removeFromCart);

module.exports = CartRouter;
