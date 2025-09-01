import express from 'express'
import { fazlogin, home } from '../controllers/controllerLogin.js';

const router = express();

router.get('/',home)
router.post('/login',fazlogin)

export default router;


