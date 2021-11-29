import 'reflect-metadata'
import { createConnection} from 'typeorm'
import app from './app';


import {Afp, AfpTrabajador, Cargo, Empresa,
     Modulo, ModuloEmpresa, Salud, Tipocontrato, Trabajador, 
     Usuario, UsuarioEmpresa,User} from "./models";

import {createUsuarios} from './utils'    
createConnection();





createConnection().then(async connection => {

    await connection.runMigrations();
    // tests out repo functionality
    // might be commented out
    await smokeTest(connection);

    // start server
    app.listen(8080, () => console.log('server running on port 8080'));

}).catch(error => console.log(error));
