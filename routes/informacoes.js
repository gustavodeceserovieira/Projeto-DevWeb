import express from 'express'

const app= express();
app.use(express.json());

app.get('/mostraInformacoes', async (req, res) => {
  res.render('informacoes')
});

export default app;
