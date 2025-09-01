import express from 'express'
import { editaAluno, getAlunosCategoria, getAlunosRg, telaEditaAluno } from '../controllers/controllerAluno.js';

const router = express.Router()

router.get('/editarAluno', telaEditaAluno);
router.post('/editaAluno',editaAluno)
router.get('/get_alunos/:categoria_id', getAlunosCategoria)
router.get('/get_alunos_rg/:nome',getAlunosRg)

export default router;
