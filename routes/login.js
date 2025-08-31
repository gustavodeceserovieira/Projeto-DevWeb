import express from 'express'
import get_ajustes, {login} from '../models/select.js'

const app= express();
app.use(express.json());

app.get('/', async (req, res) => {
    const usuariosCadastrados = await login()
    if(usuariosCadastrados['quantidade'] == 0){
      return res.render('criaUsuario',{msg:""})
    }
    return res.render('login',{msg:""})

});
app.post('/login', async (req, res) => {
  const dadosUsuario = {
    'usuario':req.body.nome,
    'senha': req.body.password
  }
  const dadosUsuariobanco = await login();
  const ajustes = await get_ajustes();
  for (const element of dadosUsuariobanco['usuarios']) {
    if(ajustes['qtd'] == 0){
      return res.redirect('TelaAjustes')
    }
    if(element['nome'] == dadosUsuario['usuario'] && element['senha'] == dadosUsuario['senha']){
      return res.redirect('mostraInformacoes')
    }
  } 
  return res.render('login',{msg:"Usuário ou senha inválidos"})
});
  
  //Adicionar sessão

export default app;


