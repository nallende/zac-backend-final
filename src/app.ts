import express from 'express';
import cors from 'cors';
import 'reflect-metadata'
import swaggerUi from "swagger-ui-express"


const app = express();

// Middlewares
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// app.use(
//     "/docs",
//     swaggerUi.serve,
//     swaggerUi.setup(undefined, {
//       swaggerOptions: {
//         url: "/swagger.json",
//       },
//     })
//   );

// routes

import afpRoutes from './routes/afp.routes'
import contratoRoutes from './routes/contrato.routes'
import empresaRoutes from './routes/empresa.routes'
import personalRoutes from './routes/personal.routes'
import tipoIngresoRoutes from './routes/tipoingreso.routes'
import usuarioRoutes from './routes/usarios.routes'
import usuarioEmpresaRoutes from './routes/usuarioemp.routes'
import cargoRoutes from './routes/cargo.routes'
import descuentoRoutes from './routes/descuento.routes'
import moduloRoutes from './routes/modulo.routes'
import tipocontratoRoutes from './routes/tipocontrato.routes'
import tipodescuentoRoutes from './routes/tipodescuento.routes'
import saludRoutes from './routes/salud.routes'
import userRoutes from './routes/usarios.routes'


app.use( afpRoutes );
app.use( contratoRoutes );
app.use( empresaRoutes );
app.use( personalRoutes );
app.use( tipoIngresoRoutes );
app.use( usuarioRoutes );
app.use( usuarioEmpresaRoutes );
app.use( cargoRoutes );
app.use( descuentoRoutes );
app.use( moduloRoutes );
app.use( tipocontratoRoutes );
app.use( tipodescuentoRoutes );
app.use( saludRoutes );
app.use( userRoutes );

export default app;

