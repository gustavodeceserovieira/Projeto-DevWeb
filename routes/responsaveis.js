import { editaResponsavel, telaResponsaveis } from '../controllers/controllerResponsaveis.js';
import express from 'express'

const router = express();

router.get('/EditarResponsavel', telaResponsaveis)
router.post('/editaResponsavel', editaResponsavel)
export default router;

