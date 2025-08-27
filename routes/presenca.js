import express from 'express'


const app= express();
app.use(express.json());

app.get('/Presenca', async (req, res) => {
  res.render('presenca')
});

export default app;
