const Product = require('../models/Product');

exports.getAllProducts = async (req, res) => {
    try {
        const products = await Product.find();
        res.json(products);
    } catch (error) {
        res.status(500).json({ message: 'Error fetching products' });
    }
};

exports.getProductById = async (req, res) => {
    const { id } = req.params;
    //   console.log("Fetching product with ID:", id); 
    try {
        const product = await Product.findById(id);
        if (!product) {
            return res.status(404).json({ message: 'Product not found' });
        }
        res.json(product);
    } catch (error) {
        res.status(500).json({ message: 'Error fetching product' });
    }
};

exports.createProduct = async (req, res) => {
  const { name, price, about, stock, rating, sizes, colors, images } = req.body;
  try {
    const sellerId = req.user.id;
    const newProduct = new Product({ name, price, about, stock, rating, sizes, colors, images, sellerId });
    await newProduct.save();
    res.status(201).json(newProduct);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Error creating product' });
  }
};

exports.updateProduct = async (req, res) => {
    const { id } = req.params;
    const { name, price, about, stock, rating, sizes, colors, images } = req.body;
    try {
        const updatedProduct = await Product.findByIdAndUpdate(id, { name, price, about, stock, rating, sizes, colors, images }, { new: true });
        if (!updatedProduct) {
            return res.status(404).json({ message: 'Product not found' });
        }
        res.json(updatedProduct);
    } catch (error) {
        res.status(500).json({ message: 'Error updating product' });
    }
};

exports.deleteProduct = async (req, res) => {
    const { id } = req.params;
    try {
        const deletedProduct = await Product.findByIdAndDelete(id);
        if (!deletedProduct) {
            return res.status(404).json({ message: 'Product not found' });
        }
        res.json({ message: 'Product deleted successfully' });
    } catch (error) {
        res.status(500).json({ message: 'Error deleting product' });
    }
};
exports.getProductsBySeller = async (req, res) => {
  try {
    const { sellerId } = req.params;
    const products = await Product.find({ sellerId });
    res.status(200).json(products);
  } catch (error) {
    console.error("Error fetching seller products:", error);
    res.status(500).json({ message: "Server error while getting seller products" });
  }
};