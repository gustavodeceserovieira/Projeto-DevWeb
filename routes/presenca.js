import express from 'express'
import { retorna_categorias } from '../models/select.js'

const app= express();
app.use(express.json());

app.get('/Presenca', async (req, res) => {
  //const categorias = await retorna_categorias()
  res.render('presenca')
});

export default app;
