// Import the user model
const userModel = require("../Models/userModel");

// Function to get all users
const getUsers = async (req, res) => {
    try {
        // Fetch all users from the database
        const users = await userModel.find();

        // Respond with the list of users
        res.status(200).json(users);

    } catch (error) {
        console.error("Error fetching users:", error.message);
        res.status(500).json("Server error");
    }
};

// Export the getUsers function
module.exports =  {getUsers} ;
