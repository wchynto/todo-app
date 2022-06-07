const mongoose = require("mongoose");

const MONGO_URL = "mongodb://localhost:27017/db_todo_app";

mongoose.connect(MONGO_URL);

const db = mongoose.connection;

db.on("error", () => {
  console.log("failed to connect database");
});

db.once("connected", () => {
  console.log("database connection success");
});
