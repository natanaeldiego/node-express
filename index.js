const express = require("express");
const app = express();

//Allows data in json format
//Permite os dados no formato json
app.use(express.json());

//Serve para retornar dados
app.get("/users", (req, res) => {
  res.send("retorna os usários");
});

//Serves to return data
//Serve para criar dados
app.post("/user", (req, res) => {
  const nome = req.body.nome;
  const email = req.body.email;
  const telefone = req.body.telefone;
  res.status(200).json({ status: "Nome: "+nome+" - Email: "+email+" - Telefone:"+telefone });
});

//It serves to update a data
//Serve para atualizar um dado
app.put("/user", (req, res) => {
  const nome = req.body.nome;
  const id = req.body.id;
  res.status(200).json({ status: "Nome: "+nome+" - Id: "+id });
});

//Serve para apagar/deletar dado
//Serve para apagar/deletar dado
app.delete("/user", (req, res) => {
  const id = req.body.id;
  res.status(200).json({ status: " - Id: "+id });
});

//Below is a node chosen for the node to run.
//A baixo é escolhido uma pora para o node rodar
const port = 3000;
app.listen(port, () => {
  console.log(`Server started on port`);
});
