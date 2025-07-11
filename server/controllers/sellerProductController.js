const Product = require('../models/Product');

// @route   POST /api/seller/products
// @access  Private (Seller only)
exports.createSellerProduct = async (req, res) => {
  try {
    if (req.user.role !== 'seller') {
      return res.status(403).json({ message: "Only sellers can add products." });
    }

    const newProduct = new Product({
      ...req.body,
      sellerId: req.user.id, // Automatically assign the seller ID
    });

    await newProduct.save();
    res.status(201).json(newProduct);
  } catch (err) {
    res.status(500).json({ message: "Server error", error: err.message });
  }
};
