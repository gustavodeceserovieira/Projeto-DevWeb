import express from 'express'
import get_ajustes, { get_alunos, get_alunos_rg, retorna_categorias } from '../models/select.js'
import {retorna_alunos_por_categoria } from '../models/select.js'
import { insere_presenca } from '../models/insert.js';
import { atualiza_presenca } from '../models/update.js';
const app= express();
app.use(express.json());

app.get('/Presenca', async (req, res) => {
  const categorias = await retorna_categorias()
  res.render('presenca',{data:categorias})
});

app.post('/editaPresenca', async (req, res) => {
  let alunos_ausentes = []
  let alunos_presentes = []
  const presencas = {} 
  for (const key in req.body.data_presenca) {
    if (key.startsWith("presenca")) {
      const index = key.split("[")[1].slice(0, -1);
      presencas[index] = req.body[key];
    }
  }
  const data_presenca = req.body.data_presenca
  const alunosCategoria = await retorna_alunos_por_categoria(req.body.categorias)
  for (const alunos of alunosCategoria) {
    const presente = alunos in presencas
    const dados = {
      'Rg':alunos['rg_aluno'],
      'Nome':alunos['nome'],
      'Data':data_presenca,
    }
    if(presente){
      alunos_presentes.push(dados)
      await insere_presenca(dados)
    }else{
      alunos_ausentes.push(dados)
    }    
    console.log(dados)       
  }
  for (const alunosAusentes of alunos_ausentes) {
    const rg = alunosAusentes['Rg']
    const getAlunos = await get_alunos_rg(rg)
    const ajustes = await get_ajustes()
    for (const alunos of getAlunos) {
      let nro_faltas = alunos['faltas']
      let nro_aulas = ajustes['aulas']
      let faltas_totais = nro_faltas + 1
      let frequencia = 100 - (faltas_totais / nro_aulas) * 100
      const dados = {
        'Rg':rg,
        'Frequencia': frequencia,
        'Faltas': faltas_totais,
      }
      await atualiza_presenca(dados) 
    }
    return res.redirect("mostraInformacoes")
  }
});
export default app;
