require('dotenv').config();
const express = require("express");
const app = express();
const cors = require("cors");

const authRoute = require("./routes/auth-route");

app.use(express.json()); //parse json
app.use(cors());

app.use("/authen",authRoute)

const port = process.env.PORT || 8000;
app.listen(port,()=> console.log(`Server is running in port`,port));
