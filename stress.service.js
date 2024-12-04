const express = require("express");
const app = express();
const morgan = require("morgan");

app.use(morgan("dev"));

app.get("/", (req, res) => {
  for (let index = 0; index < 10000000000; index++) {}
  console.log("service 1");
  res.send("Hello World");
});

app.listen(3002, () => {
  console.log("listening to the server 3002...");
});
