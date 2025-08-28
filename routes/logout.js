import express from 'express'


const app= express();
app.use(express.json());

app.get('/logout', async (req, res) => {
  return res.render('login',{msg:''})
});

export default app;
