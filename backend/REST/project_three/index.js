const express = require("express");
const app = express();
const bodyParser = require("body-parser");
app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.json());
const port = 5000;
app.get("/", (req, res) => {
  res.send("Working");
});
app.post("/add", (req, res) => {
  const { number1, number2 } = req.body;
  var x = +number1 + +number2;
  res.send(`Sum : ${x}`);
});
app.listen(port, () => {
  console.log(`listening at port ${port}`);
});
