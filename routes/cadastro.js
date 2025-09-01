import express from 'express'
import { cadastraAluno, telaCadastro } from '../controllers/controllerCadastro.js';


const router = express.Router()

router.get('/cadastro',telaCadastro)
router.post('/cadastraInformacoes',cadastraAluno)

export default router;
