const express = require("express"); // get express modult
const app = express(); // create express app
const port = 5000;

app.get("/", (req, res) => res.send("Hello World!")); // root directory

app.listen(port, () =>
  console.log(`Example app listening at http://localhost:${port}`)
);
