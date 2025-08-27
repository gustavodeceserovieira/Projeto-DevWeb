import { get_historico_pagamento } from '../models/select.js'
import express from 'express'

const app= express();
app.use(express.json());

app.get('/HistoricoPresenca', async (req, res) => {
  res.render('HistoricoPresenca')
});

app.get('/HistoricoPagamento', async (req, res) => {
  res.render('historicoPagamento')
});

export default app;
