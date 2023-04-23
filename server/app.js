const express = require("express");
const mysql = require("mysql");
const cors = require("cors");
const app = express();

app.use(express.json());
app.use(cors());

const db = mysql.createConnection({
  user: "root",
  host: "localhost",
  password: "1840_Rohit",
  database: "puzzle_db",
});
//gettin the info from the page
app.post("/register", (req, res) => {
  const username = req.body.username;
  const password = req.body.password;

  db.query(
    "INSERT INTO user (username,password) VALUES (?,?) ",
    [username, password],
    (err, result) => {
      if (err) {
        console.log(err);
        res.status(500).send("Error registering user");
      } else {
        res.status(200).send("User registered successfully");
      }
    }
  );
});

//for cheching the user is already exits or not
app.post("/login", (req, res) => {
  const username = req.body.username;
  const password = req.body.password;

  db.query(
    "SELECT * FROM user where username = ? and password = ? ",
    [username, password],
    (err, result) => {
      if (err) {
        res.send({ err: err });
        // console.log(err);
        //res.status(500).send("Error registering user");
      }

      if (result.length > 0) {
        res.send(result);
      } else {
        res.send({ message: "Wrong username/password !" });
      }
      // res.status(200).send("User registered successfully");
    }
  );
});

app.listen(3001, () => {
  console.log("running server");
});
