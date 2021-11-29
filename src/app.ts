import * as express from 'express';
import cors from 'cors';


const app = express();
app.use(express.json());
app.use(router);

// Middlewares
app.use(cors());
app.use(express.json({ limit: "2mb" }));
app.use(express.urlencoded({ extended: false }));


// routes

//import empresaRoutes from './routes/empresa'
import usuarioRoutes from './routes/usarios'

app.use( usuarioRoutes );
//app.use( empresaRoutes );



export default app;
