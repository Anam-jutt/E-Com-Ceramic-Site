const Cart = require("../models/cartSchema");

exports.getCart = async (req, res) => {
  try {
    const cart = await Cart.findOne({ buyerId: req.user.id }).populate("products.product");
    res.status(200).json(cart || { products: [] });
  } catch (err) {
    res.status(500).json({ message: "Failed to fetch cart", error: err.message });
  }
};

exports.addToCart = async (req, res) => {
  const { productId } = req.body;
  try {
    let cart = await Cart.findOne({ buyerId: req.user.id });
    if (!cart) cart = new Cart({ buyerId: req.user.id, products: [] });

    const existingProduct = cart.products.find((p) => p.product.toString() === productId);
    if (existingProduct) {
      existingProduct.quantity += 1;
    } else {
      cart.products.push({ product: productId, quantity: 1 });
    }

    await cart.save();
    await cart.populate("products.product");
    res.status(200).json(cart);
  } catch (err) {
    res.status(500).json({ message: "Failed to add to cart", error: err.message });
  }
};

exports.removeFromCart = async (req, res) => {
  const { productId } = req.params;
  try {
    const cart = await Cart.findOne({ buyerId: req.user.id });
    if (!cart) return res.status(404).json({ message: "Cart not found" });

    cart.products = cart.products.filter((p) => p.product.toString() !== productId);
    await cart.save();
    await cart.populate("products.product");
    res.status(200).json(cart);
  } catch (err) {
    res.status(500).json({ message: "Failed to remove product", error: err.message });
  }
};
exports.decreaseQuantity = async (req, res) => {
  const { productId } = req.body;
  try {
    const cart = await Cart.findOne({ buyerId: req.user.id });
    if (!cart) return res.status(404).json({ message: "Cart not found" });

    const item = cart.products.find((p) => p.product.toString() === productId);
    if (item) {
      if (item.quantity > 1) {
        item.quantity -= 1;
      } else {
        cart.products = cart.products.filter((p) => p.product.toString() !== productId);
      }
      await cart.save();
      await cart.populate("products.product");
    }
    res.status(200).json(cart);
  } catch (err) {
    res.status(500).json({ message: "Failed to decrease quantity", error: err.message });
  }
};