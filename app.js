const express = require("express")
const morgan = require("morgan")

const app = express();
app.use(morgan("dev"));
app.get("/", (req, res) => {
  for (let index = 0; index < 1000000000; index++) {}
  console.log("Hello World");
  res.send("Hello World");
});

app.listen(3000, () => {
  console.log("listening to the server 3000...");
});
