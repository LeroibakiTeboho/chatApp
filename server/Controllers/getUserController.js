// Import the user model
const userModel = require("../Models/userModel");

// Function to find a user by ID
const findUser = async (req, res) => {
  try {
    const { userId } = req.params;

    // Validate the provided user ID
    if (!userId) {
      return res.status(400).json("User ID is required");
    }

    // Find the user in the database
    const user = await userModel.findById(userId);

    // Check if user exists
    if (!user) {
      return res.status(404).json("User not found");
    }

    // Return the user data
    res.status(200).json(user);
  } catch (error) {
    console.error("Error finding user:", error.message);
    res.status(500).json("Server error");
  }
};

// Export the findUser function
module.exports = {findUser};
