import { cria_usuario} from '../models/insert.js';
import { login} from '../models/select.js';

export async function telaCriaUsuario(req,res) {
    return res.render('criaUsuario',{msg:""})
}
export async function criaUsuario(req,res) {
    const dadosUsuario = {
        'usuario':req.body.nome,
        'senha':req.body.password
    }
    const dadosUsuariobanco = await login()
    for (const element of dadosUsuariobanco['usuarios']) {
        if(element['nome'] == dadosUsuario['usuario']){
            return res.render('criaUsuario',{msg:"Usuário já cadastrado"})
        }
    }
    await cria_usuario(dadosUsuario['usuario'],dadosUsuario['senha'])
    return res.render('login',{msg:""})
}