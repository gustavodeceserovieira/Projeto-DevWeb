import express from 'express'
import get_ajustes, {login,get_alunos,get_responsaveis,retorna_categorias_dos_alunos} from '../models/select.js'
const app= express();
app.use(express.json());

app.get('/mostraInformacoes', async (req, res) => {
  /*Adicionar Sessão
  let administrador = false;
  const dadosUsuariobanco = await login()
  for (const element of dados) {
    
  }
  */
  const alunos = await get_alunos();
  const responsaveis = await get_responsaveis()
  const categorias = await retorna_categorias_dos_alunos();
  const data = alunos.map((aluno, i) => ({
    elementos: aluno,
    responsaveis: responsaveis[i],
    categorias: categorias[i]
}));
  return res.render('informacoes',{data})
});



export default app;
