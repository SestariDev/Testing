const express = require("express");
const app = express();
const mysql = require("mysql")
const cors = require("cors")

app.use(cors())
app.use(express.json())


const db = mysql.createConnection({
    host: "localhost",
    user: "root",
    password: "password",
    database: "crudgames",
})

app.get("/getcards", (req, res) =>{
    let SQL = "Select * from games"
    db.query(SQL,(err, result) =>{
        err ? console.log(err) : res.send(result)
    }
    )
})


app.post("/register", (req, res) => {
    const { name, cost, category } = req.body;
  
    // Aqui você pode realizar a lógica necessária, como inserir os dados no banco de dados
    let SQL = "INSERT INTO games (name, cost, category) VALUES (?, ?, ?)";
    db.query(SQL, [name, cost, category], (err, result) => {
      if (err) {
        console.log(err);
        res.status(500).json({ error: "Erro interno do servidor" });
        return;
      }
  
      console.log("Dados inseridos com sucesso!");
      res.status(200).json({ message: "Dados inseridos com sucesso!" });
    });
  });

app.listen(3001, () => {
    console.log('Rodando servidor')
})

app.get('/register', (req, res) => {
    res.send("")
}


)