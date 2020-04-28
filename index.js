const express = require("express");
const mongoose = require("mongoose");

const keys = require("./config/keys");

require("./models/User");
require("./services/passport");

mongoose.connect(keys.mongoURI, {
  useNewUrlParser: true,
  useCreateIndex: true,
  useUnifiedTopology: true,
});

mongoose.connection.on("connected", () => {
  console.log("Connected to mongo instance");
});
mongoose.connection.on("error", (err) => {
  console.error("Error connenting to mongo", err);
});

const app = express();

require("./routes/authRoutes")(app);

const PORT = process.env.PORT || 5000;

app.listen(PORT);
