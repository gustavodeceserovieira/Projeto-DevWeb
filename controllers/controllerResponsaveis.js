import { get_alunos, get_alunos_rg, get_responsaveis_rg } from "../models/select.js"
import { atualiza_dados_responsaveis } from "../models/update.js"


export async function telaResponsaveis(req,res) {
    const alunos_dados = await get_alunos()
    let responsaveis = []
    for (const aluno of alunos_dados) {
        const rg = aluno['rg_aluno']
        responsaveis.push(await get_responsaveis_rg(rg))
    }
    const alunos = await get_alunos()
    const data = alunos.map((aluno, i) => ({
        alunos:aluno,
        responsaveisAlunos:responsaveis[i]
    }));
    return res.render('editaResponsavel',{data})
}

export async function editaResponsavel(req,res) {
    const dados = {
        'Rg':req.body.rg.split("  ")[0].trim(),
        'Nome': req.body.nome_atualizado.trim(),
        'Tel':req.body.tel.trim(),
    }
    const alunosPorRg = await get_alunos_rg(dados['Rg'])
    for (const alunos of alunosPorRg) {
        await atualiza_dados_responsaveis(dados,alunos['rg_aluno'])
    }
    return res.redirect("mostraInformacoes")
}