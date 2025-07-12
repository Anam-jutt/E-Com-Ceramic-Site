const express = require('express');
const productsRouter = express.Router();
const { getProductById, createProduct, updateProduct, deleteProduct, getAllProducts, getProductsBySeller } = require('../controllers/productController');
const { authenticate } = require("../middleware/auth");
const { authorize } = require("../middleware/auth");

// Public routes
productsRouter.get('/', getAllProducts);
productsRouter.get('/:id', getProductById);
productsRouter.get("/seller/:sellerId", getProductsBySeller);

// Seller protected routes
productsRouter.post('/', authenticate, authorize(["seller"]), createProduct);
productsRouter.put('/:id', authenticate, authorize(["seller"]), updateProduct);
productsRouter.delete('/:id', authenticate, authorize(["seller"]), deleteProduct);

module.exports = productsRouter;