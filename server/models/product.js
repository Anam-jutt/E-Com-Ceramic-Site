const mongoose = require('mongoose');

const productSchema = new mongoose.Schema({
  name:     { type: String, required: true, trim: true },
  price:    { type: Number, required: true, min: 0 },
  rating:   { type: Number, default: 0, min: 0, max: 5 },
  stock:    { type: Number, default: 0, min: 0 },
  sizes:    { type: [String], default: [] },
  colors:   { type: [String], default: [] },
  images:   { type: [String], default: [] },
  about:    { type: String, required: true, trim: true },
  sellerId: { type: mongoose.Schema.Types.ObjectId, ref: 'User', required: true }
}, { timestamps: true });

const Product = mongoose.model('Product', productSchema);
module.exports = Product;
