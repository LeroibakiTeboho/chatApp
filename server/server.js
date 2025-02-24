const express = require("express");
const cors = require("cors");
const mongoose = require("mongoose");
const userRouter = require("./Routes/userRoute");

const app = express();
require("dotenv").config();

app.use(express.json());
app.use(cors());
app.use("/api/users", userRouter)


app.get("/", (req, res) => {
  res.send("Welcome our chat app APIs...");
});

const port = process.env.PORT || 3500;
const uri = process.env.ATLAS_URI;

app.listen(port, (req, res) => {
  console.log(`Server running on port: ${port}`);
});

mongoose
  .connect(uri)
  .then(() => console.log("MongoDB connection successful"))
  .catch((error) => console.log("mongoDB connection failed: ", error.message));


  