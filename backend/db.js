const mongoose = require("mongoose");
require("dotenv").config();
mongoURI = process.env.DB_URL;

const connectToMongo = () => {
  console.log("trying to connect");
  mongoose
    .connect(mongoURI, { family: 4 })
    .then((db) => console.log("DB is Connected"))
    .catch((err) => console.log(err));
};
module.exports = connectToMongo;
