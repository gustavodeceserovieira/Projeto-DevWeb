import {get_responsaveis, get_responsaveis_rg } from '../models/select.js'
import express from 'express'

const app= express();
app.use(express.json());


app.get('/EditarResponsavel', async (req, res) => {
  res.render('editaResponsavel')
});

export default app;

