const mongoose = require("mongoose");
const dotenv = require("dotenv");
dotenv.config({ path: "../config.env" });

const db = process.env.DATABASE.replace(
  "<PASSWORD>",
  process.env.DATABASE_PASSWORD
);

mongoose
  .connect(db)
  .then(() => {
    console.log("DB connected....");
  })
  .catch((err) => {
    console.log("Error on DB connection");
  });
