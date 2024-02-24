const mongoose = require("mongoose");

mongoose.connect("mongodb+srv://aasthatech345:aastha.tech345@cluster0.a3lct4z.mongodb.net/Window_Resize", {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

const db = mongoose.connection;

db.on("error", console.error.bind(console, "Connection error:"));
db.once("open", () => {
  console.log("Connected to the database!");
});
