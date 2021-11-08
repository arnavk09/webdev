const express = require("express");
const app = express();
//start of important lines
const bodyParser = require("body-parser");
app.use(bodyParser.urlencoded({ extended: true }));
//end of important lines. rest is usual stuff
app.use(express.json());
const port = 5000;
app.get("/", (req, res) => {
  res.send("Working");
});
//vscode.dev TEST
app.post("/add", (req, res) => {
  const { number1, number2 } = req.body; //destructuring params
  var x = +number1 + +number2;
  res.send(`Sum : ${x}`);
});
app.listen(port, () => {
  console.log(`listening at port ${port}`);
});
