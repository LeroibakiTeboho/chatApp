// Import required modules
const userModel = require("../Models/userModel");
const bcrypt = require("bcrypt");
const validator = require("validator");
const jwt = require("jsonwebtoken");

// Function to create a JWT token
const createToken = (_id) => {
  const jwtkey = process.env.JWT_SECRET_KEY;
  return jwt.sign({ _id }, jwtkey, { expiresIn: "3d" });
};

// User register function
const registerUser = async (req, res) => {
  try {
    const { name, email, password } = req.body;

    // Check if all fields are provided
    if (!name || !email || !password) {
      return res
        .status(400)
        .json({ error: true, message: "All fields are required" });
    }

    // Validate email and password strength
    if (!validator.isEmail(email)) {
      return res.status(400).json({ error: true, message: "Invalid email" });
    }
    if (!validator.isStrongPassword(password)) {
      return res
        .status(400)
        .json({ error: true, message: "Strong password is required" });
    }

    // Check if the user already exists
    let existingUser = await userModel.findOne({ email });
    if (existingUser) {
      return res
        .status(400)
        .json({ error: true, message: "User already exists" });
    }

    // Hash the password
    const salt = await bcrypt.genSalt(10);
    const hashedPassword = await bcrypt.hash(password, salt);

    // Create a new user with the hashed password
    const newUser = await userModel.create({
      name,
      email,
      password: hashedPassword,
    });

    // Generate a JWT token
    const token = createToken(newUser._id);

    res.status(201).json({
      _id: newUser._id,
      name: newUser.name,
      email: newUser.email,
      token,
    });
  } catch (error) {
    console.log(error);
    res.status(500).json({ error: true, message: "Server error" });
  }
};

module.exports = { registerUser };
