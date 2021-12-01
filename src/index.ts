import 'reflect-metadata'
import { createConnection} from 'typeorm'
import app from './app';
//import { smokeTest } from './smoke-test';
//import {createUsuarios} from './utils'    

import {Afp, AfpTrabajador, Cargo, Empresa,
     Modulo, ModuloEmpresa, Salud, Tipocontrato, Trabajador, 
     Usuario, UsuarioEmpresa} from "./entities";


createConnection().then(async connection => {

   
    // tests out repo functionality
    // might be commented out
    //await smokeTest(connection);

    // se activa Servidor
    const port = 3001
    app.listen(process.env.PORT || 3001, ()=>console.log(`Servidor activo en http://localhost:${port}`));
   
    await connection.runMigrations();

}).catch(error => console.log(error));