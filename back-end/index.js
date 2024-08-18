const express = require("express");
const bodyParser = require("body-parser");
const mongoose = require("mongoose");
const cardsRouter = require("./routes/CardRoute");
require("dotenv").config();
const cors = require("cors");

const app = express();
const PORT = process.env.PORT || 4000;

app.use(bodyParser.json());
app.use(cors());
// Connect to MongoDB
mongoose.connect(process.env.MONGODB_URI, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

const db = mongoose.connection;
db.on("error", console.error.bind(console, "connection error:"));
db.once("open", () => {
  console.log("Connected to MongoDB");
});

// GET request /ping
app.get("/ping", (req, res) => {
  res.send("Server is running");
});

//  cards router api/cards
app.use("/api", cardsRouter);

app.use((err, req, res, next) => {
  console.error(err.stack);
  res.status(500).send({ message: "Something went wrong!" });
});

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
