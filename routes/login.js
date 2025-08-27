import express from 'express'
import get_ajustes from '../models/select.js'

const app= express();
app.use(express.json());

app.get('/', async (req, res) => {
  res.render('login')
});

app.post('/login', async (req, res) => {
  res.render('informacoes')
});



export default app;


