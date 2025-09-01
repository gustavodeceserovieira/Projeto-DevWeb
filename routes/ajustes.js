import { ajustes, TelaAjustes } from '../controllers/controllerAjustes.js'
import express from 'express'

const router = express.Router()

router.post("/ajustes", ajustes)
router.get('/telaAjustes',TelaAjustes)

export default router;