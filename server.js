import express from 'express'
import dotenv from 'dotenv'
import routesAjustes from './routes/ajustes.js'
import routesAlunos from './routes/alunos.js'
import routesHistorico from './routes/historico.js'
import routesResponsaveis from './routes/responsaveis.js'
dotenv.config()
const app = express();
app.use(express.json());
app.use(routesAjustes)
app.use(routesAlunos)
app.use(routesHistorico)
app.use(routesResponsaveis)

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => console.log(`Servidor rodando na porta ${PORT}`));

