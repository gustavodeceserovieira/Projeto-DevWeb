import express from 'express'
import {login} from '../models/select.js'
const app = express();
app.use(express.json());
app.set('views', './views')
app.set('view engine', 'ejs')


export default async function Controllerlogin(dadosUsuario){
    const dadosUsuarioBanco = await login()
    //Adicionar sessão
    for(dadosUsuario in dadosUsuarioBanco){
        let usuario = dadosUsuarioBanco[0]['nome']
        let senha = dadosUsuarioBanco[0]['senha']
        if(dadosUsuario[0] == usuario && dadosUsuario[1] == senha){
            console.log("Usuário existe")
        }
    }
}