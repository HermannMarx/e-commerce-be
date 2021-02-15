const express = require("express");
const app = express();

const users = require("./routes/users");
const products = require("./routes/products");

app.use("/", users);
app.use("/", products);

app.listen(3000, console.log("Server is listening on port 3000"));
