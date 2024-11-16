const express = require("express");
const app = express();
const port = 3000;
const config = {
  host: 'db',
  user: 'root',
  password: 'root',
  database: 'nodedb'
}

const mysql = require('mysql');
const connection = mysql.createConnection(config);

const sql = `INSERT INTO people(name) values('Josimar')`;
connection.query(sql);


let names =[];
const research = `SELECT name FROM people`;
connection.query(research, function (err, result) {
  if(err){
    throw err;
  } 
  console.log(result);
  result.forEach((result) => {
    names.push(result.name);
  })
})

connection.end();
app.get("/", (req, res) => {
  const namesString = names.map((name) => `<p>${name}</br></p>`).join("");
  res.send("<h1>Full Cycle!</br></h1>" + namesString);
});

app.get("/", (req, res) => {
  const namesString = ""
  names.map((name) => `<p>${name}</br></p>`).join("");
  res.send("<h1>Full Cycle!</br></h1>" + namesString);
});


app.listen(port, () => {
  console.log("Rodando na porta " + port);
});