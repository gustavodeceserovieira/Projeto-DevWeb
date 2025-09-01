import { retorna_historico_pagamento} from  '../models/select.js'


export default async function telaHistoricoPagamento(req,res) {
    const alunos= await retorna_historico_pagamento()
    return res.render('historicoPagamento',{data:alunos})
}


