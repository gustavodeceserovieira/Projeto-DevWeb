import get_ajustes, {login,get_alunos,get_responsaveis,retorna_categorias_dos_alunos} from '../models/select.js'

export async function informacoes(req,res) {
    let administrador = false
    const getUsuarios = await login()
    for (const usuarios of getUsuarios['usuarios']) {
        if(req.session.nome == 'Administrador'){
            administrador = true;
        }
    }
    const alunos = await get_alunos();
    const responsaveis = await get_responsaveis()
    const categorias = await retorna_categorias_dos_alunos();
    const data = alunos.map((aluno, i) => ({
        elementos: aluno,
        responsaveis: responsaveis[i],
        categorias: categorias[i]
    }));
    return res.render('informacoes',{administrador,data})
}
