import express from 'express'
import {retorna_categorias} from '../models/select.js';

const app= express();
app.use(express.json());

app.get('/cadastro', async (req, res) => {
  const categorias = await retorna_categorias()
  return res.render('cadastro',{data:categorias})
});

export default app;
