import express from 'express'

const app= express();
app.use(express.json());

app.get('/TelaAjustes', async (req, res) => {
  res.render('ajustes')
});

export default app;
