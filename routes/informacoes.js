import express from 'express'
import { informacoes } from '../controllers/controllerInformacoes.js';


const router = express();

router.get('/mostraInformacoes',informacoes)

export default router;
