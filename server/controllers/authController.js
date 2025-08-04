const User = require("../models/User");
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');


exports.registerUser = async (req, res) => {
  try {
    // console.log("Register endpoint hit");
    const { username, email, password, role } = req.body;
    if (!username || !email || !password || !role) {
      return res.status(400).json({ message: "All fields are required"});
    }
    const existingUser = await User.findOne({ email });
    if (existingUser) {
      return res.status(400).json({ message: "Email already in use Go to login" });
    }
    const hashedPassword = await bcrypt.hash(password, 10);
    const user = await User.create({
      username,
      email,
      password: hashedPassword,
      role,
    });
    const token = jwt.sign(
      { id: user._id, role: user.role },
      process.env.JWT_SECRET,
      { expiresIn: "30m" } // epire in 10 min
    );
    res.status(201).json({ token, user });
  } catch (err) {
    console.error("Register Error:", err); 
    res.status(500).json({ message: "Server error", error: err.message });
  }
};

exports.loginUser = async (req, res) => {
  const { email, password } = req.body;

  try {

        // console.log("Signup Request Body:", req.body); 
    const user = await User.findOne({ email });
    if (!user) return res.status(400).json({ message: "Invalid credentials or user not found" });

    const isMatch = await bcrypt.compare(password, user.password);
    if (!isMatch) return res.status(400).json({ message: "Invalid credentials or user not found" });

    const token = jwt.sign(
      { id: user._id, role: user.role },
      process.env.JWT_SECRET,
      { expiresIn: '30m' } // expire in 10 min
    );

    res.status(200).json({ token, user });
  } catch (err) {
        // console.error("Signup Error:", err); 

    res.status(500).json({ message: "Login failed", error: err.message });
  }
};
