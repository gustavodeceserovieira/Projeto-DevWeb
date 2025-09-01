import telaHistoricoPagamento from '../controllers/controllerPagamento.js';
import { historicoPresenca } from '../controllers/controllerPresenca.js';
import express from 'express'

const router = express();

router.get('/HistoricoPresenca', historicoPresenca)
router.get('/HistoricoPagamento', telaHistoricoPagamento)

export default router;
