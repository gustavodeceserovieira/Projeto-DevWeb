import express from 'express'
import get_ajustes from '../models/select.js'

const app= express();
app.use(express.json());

app.get('/get_ajustes', async (req, res) => {
  const resposta = await get_ajustes()
  res.json(resposta)
});

export default app;
