const mongoose = require("mongoose");

const connectDB = () => {
  mongoose
    .connect("mongodb://127.0.0.1:27017/ProductCrud")
    .then(() => {
      console.log("Connected to DB");
    })
    .catch((err) => {
      console.log(err.message);
    });
};

module.exports = { connectDB };
