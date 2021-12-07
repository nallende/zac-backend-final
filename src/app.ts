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
import usuarioRoutes from './routes/usarios.route'

app.use( usuarioRoutes );
//app.use( empresaRoutes );



export default app;
