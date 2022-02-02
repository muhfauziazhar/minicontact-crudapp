const mysql = require("mysql");
const db = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "",
  database: "deacourse_miniapps",
});

db.connect(function () {
  console.log("database berhasil");
});

module.exports = db;
