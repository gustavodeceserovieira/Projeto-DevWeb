import express from 'express'
import { editaMensalidade, telaMensalidade } from '../controllers/controllerMensalidade.js';


const router = express();
router.use(express.json());

router.get('/mensalidade',telaMensalidade)
router.post('/editaMensalidade',editaMensalidade)

export default router;
