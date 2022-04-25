const express = require("express");
const cors = require("cors");
const app = express();
const mongoose = require("mongoose");
var bodyParser = require("body-parser");
const morgan = require("morgan");
const dotenv = require("dotenv");
const userRouter = require("./routes/user");

// Connect Database
// dotenv.config();
// mongoose.connect((process.env.MONGODB_URL), () => {
//     console.log("Connect DB successfully!")
// })

async function connect() {
  try {
    await mongoose.connect("mongodb://localhost/baitapNode", {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });

    console.log("Connect DB successfully!");
  } catch (error) {
    console.log("Connect failure.");
  }
}

connect();

app.use(bodyParser.json({ limit: "50mb" }));

app.use(cors());

app.use(morgan("combined"));

app.get("/", (req, res) => {
  res.status(200).json("Hello");
});

// Routers
app.use("/v1/user", userRouter);

app.listen(8000, () => {
  console.log("Server is running ....");
});
