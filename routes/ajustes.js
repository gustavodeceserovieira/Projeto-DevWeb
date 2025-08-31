import express from 'express'
import { insere_ajustes } from '../models/insert.js';
import { atualiza_ajustes, atualiza_frequencia} from '../models/update.js';
import { get_alunos } from '../models/select.js';
import  get_ajustes  from '../models/select.js';
const app= express();
app.use(express.json());

app.get('/TelaAjustes', async (req, res) => {
  return res.render('ajustes')
});


app.post('/ajustes', async (req, res) => {
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
      let nro_faltas = usuarios[4]
      let rg_aluno = usuarios[0]
      frequencia  = 100 - (nro_faltas / qtdaulas) * 100
      dados = {
        'rg_aluno':rg_aluno,
        'frequencia':frequencia
      }
      await atualiza_frequencia(dados)
    }
    return res.redirect("mostraInformacoes")
  }
});
export default app;
