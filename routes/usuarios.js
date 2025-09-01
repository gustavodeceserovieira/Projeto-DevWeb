import { criaUsuario, telaCriaUsuario } from '../controllers/controllerUsuarios.js';
import express from 'express'

const router = express();
router.get('/CriarUsuario',telaCriaUsuario)
router.post('/cria_usuario', criaUsuario)
export default router;