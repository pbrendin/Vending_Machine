const prod_data = require("../../files/vend_details.json");
const express = require("express");
const app = express();
const controller = require("../controller/file.controller");

app.use((req, res, next) => {
  res.header("Access-Control-Allow-Origin", "*");
  next();
});

app.get("/", (req, res) => {
  //console.log(prod_data);
  res.json(prod_data);
});

app.get("/products/:name", controller.download);

app.listen(5001, () => console.log("Listening on port 5001..."));
