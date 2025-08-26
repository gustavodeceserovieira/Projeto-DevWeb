import {get_responsaveis, get_responsaveis_rg } from '../models/select.js'
import express from 'express'

const app= express();
app.use(express.json());


app.get('/get_responsaveis', async (req, res) => {
  const x = await get_responsaveis()
  res.json(x)
});

app.get('/get_responsaveis_rg/:rg', async (req, res) => {
  const rg = req.params.rg 
  const resposta = await get_responsaveis_rg(rg)
  res.json(resposta)
});

export default app;

