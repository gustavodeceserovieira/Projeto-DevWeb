import {registraPresenca,TelaPresenca} from '../controllers/controllerPresenca.js'
import express from 'express'

const router = express.Router()

router.post("/editaPresenca", registraPresenca)
router.get('/Presenca',TelaPresenca)

export default router;


