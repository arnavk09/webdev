const express = require("express");
const app = express();
const bodyParser = require("body-parser");
app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.json());
const port = 5000;
app.get("/", (req, res) => {
  res.send("Sup");
});
app.get("/tacos", (req, res) => {
  res.send("Get TACOS response");
});
app.post("/tacos", (req, res) => {
  const { meat, qty } = req.body;
  res.send(`You ordered ${qty} ${meat} Tacos`);
});
app.listen(port, () => {
  console.log(`Example app listening at port ${port}`);
});
