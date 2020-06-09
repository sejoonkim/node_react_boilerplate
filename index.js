const express = require("express"); // get express module
const app = express(); // create express app
const port = 5000;

const mongoose = require("mongoose");
mongoose
  .connect(
    "mongodb+srv://sejoonkim:Mongodb_94@boilerplate-1qdid.mongodb.net/<dbname>?retryWrites=true&w=majority",
    {
      useNewUrlParser: true,
      useUnifiedTopology: true,
      useCreateIndex: true,
      useFindAndModify: false,
    }
  )
  .then(() => console.log("MongoDB Connected..."))
  .catch((err) => console.log(err));

app.get("/", (req, res) => res.send("Hello World!")); // root directory

app.listen(port, () =>
  console.log(`Example app listening at http://localhost:${port}`)
);
