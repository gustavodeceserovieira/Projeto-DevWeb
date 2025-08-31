import { get_alunos,get_alunos_rg, get_categoria, retorna_categorias } from '../models/select.js'
import express from 'express'


const app= express();
app.use(express.json());

app.get('/editarAluno', async (req, res) => {
  const alunos = await get_alunos()
  const categorias = await retorna_categorias()
  return res.render('editaAluno',{data:alunos,data1:categorias})
});

app.post('/editaAluno', async (req, res) => {
  return res.redirect('mostraInformacoes')
});

/*

try:
        if(request.form.get("on")):
            for alunos in bd.pega_alunos_por_rg(request.form.get('rg').split(" - ")[0]):
                bd.deleta_aluno_presenca(alunos[0])
                bd.deleta_aluno_historico(alunos[0])
                bd.deleta_aluno_responsaveis(alunos[0])
                bd.deleta_aluno(alunos[0])
            return redirect(url_for("mostra_informacoes"))
        else:
            dados = {
                'Rg':request.form.get('rg'),
                'Nome': request.form['nome_atualizado'],
                'Data_nascimento':request.form['data'],
                'Id_categoria':request.form.get("categoria").split(" - ")[0]
            }
            bd.atualiza_dados(request.form['rg_atualizado'],dados,request.form.get('rg').split(" - ")[0])
            for alunos in bd.pega_alunos_por_rg(dados['Rg']):
                bd.atualiza_historico(dados['Nome'],request.form['rg_atualizado'],alunos[0])
            return redirect(url_for("mostra_informacoes"))
    except:
        return redirect(url_for("mostra_informacoes"))
*/
/*
app.get('/get_alunos/:rg', async (req, res) => {
  const rg = req.params.rg
  const resposta = await get_alunos_rg(rg)
    if(resposta.length == 0){
        console.log(res.json("Usuário não existe"))
    }
    res.json(resposta)
});
*/

app.get('/get_alunos_rg/:nome', async (req, res) => {
  const nome = req.params.nome  
  const resposta = await get_rg(nome)
  res.json(resposta)
});

export default app;
