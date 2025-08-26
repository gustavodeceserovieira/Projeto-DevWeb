import { get_historico_pagamento } from '../models/select.js'
import express from 'express'

const app= express();
app.use(express.json());

app.get('/get_historico_pagamento', async (req, res) => {
  const resposta = await get_historico_pagamento()
  res.json(resposta)
});

export default app;
