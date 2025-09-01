import { atualiza_mensalidade } from "../models/update.js"
import { insere_historico} from "../models/insert.js"
import {retorna_devedores } from "../models/select.js"

export async function telaMensalidade(req,res) {
    const alunos = await retorna_devedores()
    return res.render('mensalidade',{data:alunos})
}

export async function editaMensalidade(req,res) {
    const data = req.body.data_pagamento
    if(req.body.on){
        const dados = {
            'Rg': req.body.rg.split(" ")[0],
            'Nome': req.body.rg.split(" ")[1],
            'Mensalidade': 1,
        }
        await atualiza_mensalidade(dados)
        await insere_historico(dados['Rg'],dados,data)
    }else{
        const dados = {
            'Rg': req.body.rg.split(" ")[0],
            'Mensalidade':0,
        }
        await atualiza_mensalidade(dados)
    }
    return res.redirect("mostraInformacoes")
}
