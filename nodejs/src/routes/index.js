const prod_data = require("../../files/vend_details.json");
const express = require("express");
const app = express();
const controller = require("../controller/file.controller");
var vend = JSON.stringify(prod_data);
var parsed = JSON.parse(vend);

app.use((req, res, next) => {
  res.header("Access-Control-Allow-Origin", "*");
  next();
});

app.get("/getDetails", (req, res) => {
  //console.log(prod_data);
  res.json(parsed.vend_details);
  //res.json(prod_data);
  //res.json(parsed.productName);
});

app.get("/getProducts", (req, res) => {
  res.json(parsed.productName);
});

app.get("/products/:name", controller.download);

app.listen(5001, () => console.log("Listening on port 5001..."));
