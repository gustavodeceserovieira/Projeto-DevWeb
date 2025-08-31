import { get_historico_pagamento, retorna_presenca } from '../models/select.js'
import express from 'express'

const app= express();
app.use(express.json());

app.get('/HistoricoPresenca', async (req, res) => {
  const alunos = await retorna_presenca()
  res.render('HistoricoPresenca',{data:alunos})
});

app.get('/HistoricoPagamento', async (req, res) => {
  res.render('historicoPagamento')
});

export default app;
