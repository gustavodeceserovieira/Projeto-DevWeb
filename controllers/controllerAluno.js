import { get_alunos,get_alunos_rg, get_categoria, retorna_alunos_por_categoria, retorna_categorias, retorna_categorias_dos_alunos } from '../models/select.js'
import {deleta_aluno,deleta_presenca_aluno,deleta_responsaveis_aluno,deleta_aluno_historico} from '../models/delete.js'
import { atualiza_dados, atualiza_historico_pagamento, atualiza_historico_presenca } from '../models/update.js';


export async function telaEditaAluno(req,res) {
    const alunos = await get_alunos()
    const categoriasAlunos = await retorna_categorias_dos_alunos()
    const categorias = await retorna_categorias()
    const map = alunos.map((aluno,i) => ({
        alunos:aluno,
        categoriasAlunos: categoriasAlunos[i],
    }));
  return res.render('editaAluno',{data:map,data1:categorias})
}

export async function editaAluno(req,res) {
    let rgAntigo = req.body.rg.split(" ")[0]
    let alunosRg = await get_alunos_rg(rgAntigo)
    if(req.body.on){
        for (const alunos of alunosRg ) {
          await deleta_presenca_aluno(alunos['rg_aluno'])
          await deleta_aluno_historico(alunos['rg_aluno'])
          await deleta_responsaveis_aluno(alunos['rg_aluno'])
          await deleta_aluno(alunos['rg_aluno'])
        }
        return res.redirect('mostraInformacoes')
      }else{
        const dados = {
            'Nome': req.body.nome_atualizado.trim(),
            'Data_nascimento':req.body.data.trim(),
            'Id_categoria':await get_categoria(req.body.categoria.trim())
        }
        await atualiza_dados(dados,rgAntigo)
        for (const alunos of alunosRg) {
            await atualiza_historico_pagamento(dados['Nome'],alunos['rg_aluno'])
            await atualiza_historico_presenca(dados['Nome'],alunos['rg_aluno'])
        }
        return res.redirect('mostraInformacoes')
    }
}
 
export async function getAlunosCategoria(req,res) {
    const categoria = req.params.categoria_id
    const alunos = await retorna_alunos_por_categoria(categoria)
    res.json(
    alunos.map(aluno => ({
        rg: aluno['rg_aluno'],
        nome: aluno['nome']
    })));
}

export async function getAlunosRg(req,res) {
    const nome = req.params.nome  
    const resposta = await get_rg(nome)
    res.json(resposta)
}