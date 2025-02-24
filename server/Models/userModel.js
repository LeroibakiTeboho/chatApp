const mongoose = require("mongoose");

const userSchema = new mongoose.Schema({
    name: { 
        type: String, 
        required: [true, "Name is required"], 
        minlength: [3, "Name must be at least 3 characters long"], 
        maxlength: [30, "Name cannot exceed 30 characters"] 
    },
    email: { 
        type: String, 
        required: [true, "Email is required"], 
        minlength: [3, "Email must be at least 3 characters long"], 
        maxlength: [200, "Email cannot exceed 200 characters"], 
        unique: true,
        match: [/.+@.+\..+/, "Please provide a valid email address"]
    },
    password: { 
        type: String,  
        required: [true, "Password is required"], 
        minlength: [6, "Password must be at least 6 characters long"], 
        maxlength: [1024, "Password cannot exceed 1024 characters"]
    }
}, {
    timestamps: true
});

// Export the model
const userModel = mongoose.model("User", userSchema);
module.exports = userModel;