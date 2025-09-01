import get_ajustes, { get_alunos } from '../models/select.js'
import { atualiza_ajustes,atualiza_frequencia } from '../models/update.js';
import { insere_ajustes } from '../models/insert.js';

export async function ajustes(req,res){
    let qtdaulas = parseInt(req.body.qtdAulas)
    let mensalidade = parseFloat(req.body.valorMensalidade.replace(",","."))
    let viradaMes = req.body.pagamento
    const ajustes = await get_ajustes()
    const dadosBanco = await get_alunos()
    if(ajustes['qtd'] == 0){
        await insere_ajustes(qtdaulas,mensalidade,viradaMes)
        return res.redirect("mostraInformacoes")
    }else{
        await atualiza_ajustes(qtdaulas,mensalidade,viradaMes)
    for (const usuarios of dadosBanco) {
        let nro_faltas = usuarios['faltas']
        let frequencia  = 100 - (nro_faltas / qtdaulas) * 100
        let rg_aluno = usuarios['rg_aluno']
        const dados = {
        'rg_aluno':rg_aluno,
        'frequencia':frequencia
        }
        await atualiza_frequencia(dados)
    }
    return res.redirect("mostraInformacoes")
    }
}
export async function TelaAjustes(req,res){
    const ajustes = await get_ajustes()
    if(ajustes['qtd'] == 0){
        const dados = {
            'aulas':0,
            'mensalidade':0,
            'fechamento':0,
        }
        return res.render_template("ajustes", {data:dados})
    }else{
        const dados = {
            'aulas': ajustes['aulas'],
            'mensalidade': ajustes['mensalidade'],
            'fechamento': ajustes['data_virada']
        }
        return res.render("ajustes", {data:dados})
    }
}
