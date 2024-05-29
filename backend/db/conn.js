const mongoose = require("mongoose");
const DB = process.env.DBURL;

mongoose
  .connect(DB)
  .then(() => {
    console.log("Database Connected");
  })
  .catch((error) => {
    console.log(error);
  });
