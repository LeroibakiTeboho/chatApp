// Import required modules
const userModel = require("../Models/userModel");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");

// Function to create a JWT token
const createToken = (_id) => {
  const jwtKey = process.env.JWT_SECRET_KEY;
  return jwt.sign({ _id }, jwtKey, { expiresIn: "3d" });
};

// User login function
const loginUser = async (req, res) => {
  try {
    const { email, password } = req.body;

    // Check if all fields are provided
    if (!email || !password) {
      return res.status(400).json("Email and password are required");
    }

    // Check if the user exists in the database
    const user = await userModel.findOne({ email });
    if (!user) {
      return res.status(400).json("Invalid email or password");
    }

    // Validate the provided password
    const isValidPassword = await bcrypt.compare(password, user.password);
    if (!isValidPassword) {
      return res.status(400).json("Invalid email or password");
    }

    // Generate a JWT token for the authenticated user
    const token = createToken(user._id);

    // Send the response with user details and token
    res.status(200).json({
      _id: user._id,
      name: user.name,
      email: user.email,
      token,
    });
  } catch (error) {
    console.error("Error during user login:", error.message);
    res.status(500).json("Server error");
  }
};

// Export the loginUser function
module.exports = {loginUser};
