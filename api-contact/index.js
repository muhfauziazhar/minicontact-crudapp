const express = require("express");
const port = 3001;
const contact = require("./middleware/contact");
const bodyParser = require("body-parser");

const app = express();

const cors = require("cors");

app.use(cors());
app.use(bodyParser.json());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use("/api", contact);

app.listen(port, function () {
  console.log(`server nyala di localhost:${port}`);
});
