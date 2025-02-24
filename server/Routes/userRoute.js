// Import required modules
const express = require("express");
const router = express.Router();

// Import controller functions
const { registerUser } = require("../Controllers/registerController");
const { loginUser } = require("../Controllers/loginController");
const { findUser } = require("../Controllers/getUserController");
const { getUsers } = require("../Controllers/getAllUsersController");

// User routes
router.post("/register", registerUser); // Register a new user
router.post("/login", loginUser);       // User login
router.get("/find/:userId", findUser);  // Find a user by ID
router.get("/", getUsers);              // Get all users

// Export the router
module.exports = router;
