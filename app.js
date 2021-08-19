const express = require("express");
const mongoose = require("mongoose");
const dotenv = require("dotenv");
const morgan = require("morgan");
const connectDB = require("./config/db");

//load config
dotenv.config({ path: "./config/config.env" });

connectDB();

const app = express();

//Body parser
app.use(express.urlencoded({ extended: false }));
app.use(express.json());

//loggging
if (process.env.NODE_ENV === "development") {
  app.use(morgan("dev"));
}

// //handlebars Helpers
// const { formatDate } = require("./helpers/hbs");

//Routes
app.use("/", require("./routes/index"));
app.use("/topics", require("./routes/topics"));
// app.use("/blogs", require("./routes/blogs"));

//Port
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`server running in ${process.env.NODE_ENV} mode on port ${PORT}`);
});
