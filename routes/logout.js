import express from 'express'
import { logout } from '../controllers/controllerLogout.js';


const router = express();
router.get('/logout',logout)
export default router;
