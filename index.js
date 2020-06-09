const express = require("express"); // get express module
const app = express(); // create express app
const port = 5000;
const bodyParser = require("body-parser");

const { User } = require("./models/User");

// get data with format application/x-www/form-urlencoded
app.use(bodyParser.urlencoded({ extended: true }));
// application/json type
app.use(bodyParser.json());
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

app.post("/register", (req, res) => {
  // get info needed for register -> save to DB
  const user = new User(req.body);
  user.save((err, userInfo) => {
    if (err) return res.json({ success: false, err });
    return res.status(200).json({
      success: true,
    });
  });
});

app.listen(port, () =>
  console.log(`Example app listening at http://localhost:${port}`)
);
