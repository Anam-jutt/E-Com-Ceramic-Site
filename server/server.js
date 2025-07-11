// Load Environment Variables
require('dotenv').config();


// Core Modules
const express = require('express');
const cors = require('cors');


// Local Modules
const connectDB = require('./config/db');
const productRoutes = require('./routes/productRoutes');
const sellerProductRoutes = require('./routes/sellerProductRoutes');
const authRoutes = require('./routes/authRoutes');
const cartRoutes = require('./routes/cartRoutes');
const uploadRoutes = require('./routes/uploadRoutes');


const app = express();


// CORS middleware come before routes
app.use(cors({
  origin: 'http://localhost:5173',
  credentials: true
}));


// JSON parser middleware before routes
app.use(express.json());


// Connect to MongoDB
connectDB().catch(err => {
  console.error('MongoDB connection error:', err);
  process.exit(1);
});


// Routes
app.use('/api/auth', authRoutes);
app.use('/api/products', productRoutes);
app.use("/api/seller/products", sellerProductRoutes);
app.use("/api/cart", cartRoutes);
app.use('/uploads', express.static('uploads'));
app.use('/api/upload', uploadRoutes);


app.get('/', (req, res) => {
  res.send('API is running...');
});


// Catch-all 404
app.use((req, res) => {
  res.status(404).json({ message: 'Route not found 404' });
});


// Start Server
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});
