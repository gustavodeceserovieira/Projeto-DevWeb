import { get_alunos,get_alunos_rg } from '../models/select.js'
import express from 'express'


const app= express();
app.use(express.json());

app.get('/editarAluno', async (req, res) => {
  res.render("editaAluno")
});

/*
app.get('/get_alunos/:rg', async (req, res) => {
  const rg = req.params.rg
  const resposta = await get_alunos_rg(rg)
    if(resposta.length == 0){
        console.log(res.json("Usuário não existe"))
    }
    res.json(resposta)
});
*/

app.get('/get_alunos_rg/:nome', async (req, res) => {
  const nome = req.params.nome  
  const resposta = await get_rg(nome)
  res.json(resposta)
});

export default app;
