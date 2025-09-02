import virouMes from '../functions/functions.js'
import get_ajustes, {login} from '../models/select.js'


export async function home(req,res) {
    const usuariosCadastrados = await login()
    if(usuariosCadastrados['quantidade'] == 0){
        return res.render('criaUsuario',{msg:""})
    }
    return res.render('login',{msg:""})
}


export async function fazlogin(req,res) {
    virouMes()
    //Quando faz login cria a sessão
    req.session.sessionId = Math.random().toString(36).substring(2,15);//Cria um id aleatório para a sessão
    req.session.nome = req.body.nome.trim();
    const dadosUsuario = {
        'usuario':req.body.nome.trim(),
        'senha': req.body.password.trim()
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
}