const express = require("express");
const app = express();
const bodyParser = require("body-parser");
app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.json());
const port = 5000;
app.get("/", (req, res) => {
  res.send("Working");
});
app.post("/name", (req, res) => {
  const { firstName, lastName } = req.body;
  res.send(`Hey ${firstName} ${lastName}`);
});
app.listen(port, () => {
  console.log(`listening at port ${port}`);
});
