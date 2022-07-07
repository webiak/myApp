const express = require("express");
const mysql = require("mysql");
const cors = require("cors");

const bodyParser = require("body-parser");
const cookieParser = require("cookie-parser");
const session = require("express-session");

const bcrypt = require("bcrypt");
const saltRounds = 10;

const app = express();

app.use(express.json());
app.use(
  cors({
    origin: ["http://localhost:3000"],
    methods: ["GET", "POST","DELETE","PUT"],
    credentials: true,
  })
);
app.use(cookieParser());
app.use(bodyParser.urlencoded({ extended: true }));

app.use(
  session({
    key: "userId",
    secret: "keksiky",
    name: "keksik",
    resave: false,
    saveUninitialized: false,
    cookie: {
      expires: 60 * 60 * 24,
    },
  })
);

const db = mysql.createConnection({
  user: "root",
  host: "localhost",
  password: "password",
  database: "druzina_roka",
});

app.post("/create",  (req, res) => {

  const nazov = req.body.nazov;
  const heslo = req.body.heslo;

  bcrypt.hash(heslo, saltRounds, (err, hash) => {
    if (err) {
      console.log(err);
    }

    db.query(
      "INSERT INTO druziny (nazov, heslo) VALUES (?,?)",
      [nazov, hash],
      (err, result) => {
        console.log(err);
      }
    );
  });
});



app.get("/vypis",(req,res) => {

  db.query("SELECT * FROM druziny", (err,result) =>{
    res.send(result);
  });

})

app.get("/logout",  (req, res) => {
    res.clearCookie("keksik");
    {res
        .status(200)
        .json({ success: true, message: "User logged out successfully" });
    };
});

app.get("/login", (req, res) => {
  if (req.session.user) {
    res.send({ loggedIn: true, user: req.session.user });
  } else {
    res.send({ loggedIn: false });
  }
});


app.post("/login", (req, res) => {
  const nazov = req.body.nazov;
  const heslo = req.body.heslo;

  db.query(
    "SELECT * FROM druziny WHERE nazov = ?;",
    nazov,
    (err, result) => {
      if (err) {
        res.send({ err: err });
      }

      if (result.length > 0) {
        bcrypt.compare(heslo, result[0].heslo, (error, response) => {
          if (response) {
            req.session.user = result;
            console.log(req.session.user);
            res.send(result);
          } else {
            res.send({ message: "Nespravny nazov alebo heslo!" });
          }
        });
      } else {
        res.send({ message: "Taka druzina nieje registrovana!" });
      }
    }
  );
});

app.delete("/delete", (req, res) => {
    const name = req.body.nazov;
    const sqlDelete = "DELETE FROM druziny WHERE nazov = ?";
    db.query(sqlDelete,name, (err,result) => {
        if(err){console.log(err);}
    })

});

app.put("/update", (req, res) => {
  const nazov = req.body.nazov;
  const sqlUpdate = "UPDATE druziny SET nazov = ? WHERE nazov = ?";
  db.query(sqlUpdate,nazov, (err,result) => {
      if(err){console.log(err);}
  })

});

app.listen(3001, () => {
  console.log("Sme online");
});