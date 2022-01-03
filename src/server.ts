import express from 'express';
const app = express();

app.get("/", (request, response) => {
  return response.send("Olá, mundo!!");
})

app.post("/", (request, response) => {
  return response.send("Rota de requisição post!");
})

app.listen(3333, () => console.log("Servidor rodando!!"));