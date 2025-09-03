import express from 'express'
import dotenv from 'dotenv'
import routesAjustes from './routes/ajustes.js'
import routesAlunos from './routes/alunos.js'
import routesHistorico from './routes/historico.js'
import routesResponsaveis from './routes/responsaveis.js'
import routesLogin from './routes/login.js';
import routesLogout from './routes/logout.js';
import routesInfo from './routes/informacoes.js';
import routesCadastro from './routes/cadastro.js'
import routesPresenca from './routes/presenca.js'
import routesMensalidade from './routes/mensalidade.js'
import routesUsuario from './routes/usuarios.js'
import session from 'express-session'

dotenv.config()
const app = express();
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use(session({
  secret: process.env.KEY,  
  resave: false,                  
  saveUninitialized: true,      
  cookie: { maxAge: 300000 }  //Tempo de sessão de 5 minutos 
}));

app.use((req, res, next) => {
  const publicPaths = ['/','/login','/cria_usuario'];
  if (!req.session.nome && !publicPaths.includes(req.path) && !req.path.startsWith("/css") && !req.path.startsWith("/js")) {
    return res.redirect("/");
  }
  next();
});
app.use(routesAjustes)
app.use(routesAlunos)
app.use(routesHistorico)
app.use(routesResponsaveis)
app.use(routesLogin)
app.use(routesLogout)
app.use(routesInfo)
app.use(routesCadastro)
app.use(routesPresenca)
app.use(routesMensalidade)
app.use(routesUsuario)


app.set('views', './views')
app.set('view engine', 'ejs')
app.use(express.static('public'));

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => console.log(`Servidor rodando na porta ${PORT}`));

