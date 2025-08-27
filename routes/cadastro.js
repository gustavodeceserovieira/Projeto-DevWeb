import express from 'express'

const app= express();
app.use(express.json());

app.get('/cadastro', async (req, res) => {
  res.render('cadastro')
});

export default app;
