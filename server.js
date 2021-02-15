const express = require("express");
const app = express();
const bodyParser = require("body-parser");

const users = require("./routes/users");
const products = require("./routes/products");

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

app.use("/", users);
app.use("/", products);

app.listen(3000, console.log("Server is listening on port 3000"));
