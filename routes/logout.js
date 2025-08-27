import express from 'express'


const app= express();
app.use(express.json());

app.get('/logout', async (req, res) => {
  res.redirect('/')
});

export default app;


