import * as express from 'express';
import cors from 'cors';
//import dotenv from 'dotenv';


const app = express();

// Middlewares
//app.use(cors());
app.use(express.json({ limit: "2mb" }));
app.use(express.urlencoded({ extended: false }));


// routes

//import empresaRoutes from './routes/empresa'
import afpRoutes from './routes/afp.routes'
import contratoRoutes from './routes/contrato.routes'
import empresaRoutes from './routes/empresa.routes'
import personalRoutes from './routes/personal.routes'
import tipoIngresoRoutes from './routes/tipoingreso.routes'
import usuarioRoutes from './routes/usarios.routes'
import usuarioEmpresaRoutes from './routes/usuarioemp.routes'

app.use( afpRoutes );
app.use( contratoRoutes );
app.use( empresaRoutes );
app.use( personalRoutes );
app.use( tipoIngresoRoutes );
app.use( usuarioRoutes );
app.use( usuarioEmpresaRoutes );



export default app;
