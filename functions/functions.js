/*
def virouMes():
    dia = time.strftime('%d', time.localtime())
    dia_virada = str(bd.retorna_ajustes()[0][2]).zfill(2)
    if(dia == dia_virada):
        bd.altera_divida()
    return


def zeraFaltas():
    dia = time.strftime('%d', time.localtime())
    dia_virada = str(bd.retorna_ajustes()[0][2]).zfill(2)
    if(dia == dia_virada):
        bd.zera_faltas()
    return
    */


export default async function validaData(req,res) {
    const categorias = await retorna_categorias()
    const dataAtual = req.body.data
    const dataCategoria = new Date().toISOString().split("T")[0];
    const categoria = req.body.categoria
    const d1 = new Date(dataAtual)
    const d2 = new Date(dataCategoria)
    let idade = d2.getFullYear() - d1.getFullYear();
    const mes = d2.getMonth() - d1.getMonth();
    if (mes < 0 || (mes === 0 && d2.getDate() < d1.getDate())) {
        idade--;
    }
    if(categoria == "SUB 7" && !(idade >= 6 && idade <=7) ){
        return res.render('cadastro',{data:categorias,msg:"Data inválida para a categoria SUB 7"})
    }
    if(categoria == "SUB 9" && !(idade >= 8 && idade < 10)){
        return res.render('cadastro',{data:categorias,msg:"Data inválida para a categoria SUB 9"})
    }
    if(categoria == "SUB 11" && !(idade >= 10 && idade <=11)){
        return res.render('cadastro',{data:categorias,msg:"Data inválida para a categoria SUB 11"})
    }
    if(categoria == "SUB 13" && !(idade >= 12 && idade <=13)){
        return res.render('cadastro',{data:categorias,msg:"Data inválida para a categoria SUB 13"})
    }
}
