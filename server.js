const express = require("express");
const app = express();
const mongoose = require("mongoose");

//MONGO DB CONFIGURATION
const db = require("./setup/database").mongoURL;

//DB connection
mongoose
  .connect(db)
  .then(() => console.log("database connected"))
  .catch(err => console.log(err));

//Define Routes
app.use("/api/users", require("./routes/users"));
app.use("/api/auth", require("./routes/auth"));
app.use("/api/contacts", require("./routes/contacts"));

const port = process.env.PORT || 5000;

app.listen(port, () => console.log(`Server is running at ${port}`));
