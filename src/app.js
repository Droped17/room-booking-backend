require('dotenv').config();
const express = require("express");
const app = express();
const cors = require("cors");
const mongoose = require("mongoose");
const authRoute = require("./routes/auth-route");

app.use(express.json()); //parse json
app.use(cors());

mongoose.connect(process.env.MONGOOSE_URL)
  .then(() => {
    console.log("MongoDB is connected");
  })
  .catch((err) => {
    console.error("Error connecting to MongoDB:", err);
  });

app.use("/authen",authRoute)

const port = process.env.PORT || 8000;
app.listen(port,()=> console.log(`Server is running in port`,port));
