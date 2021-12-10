import 'reflect-metadata'
import { createConnection} from 'typeorm'
import app from './app';
//import { smokeTest } from './smoke-test';
import {createUsuarios, createPersonal, createUsers } from './utils'    

import {Afp,  Cargo, Empresa, Descuento, Contrato,
     Modulo, ModuloEmpresa, Salud, Tipocontrato, Personal,
      Links, Tipoingreso, Tipodescuento, Users,Log,
     Usuario, UsuarioEmpresa} from "./entities";


createConnection().then(async connection => {

   
    // tests out repo functionality
    // might be commented out
    //await smokeTest(connection);

    // se activa Servidor
    const port = 3001
    app.listen(process.env.PORT || 3001, ()=>console.log(`Servidor activo en http://localhost:${port}`));
    
    await connection.synchronize(true)
      //await(createUsuarios(connection));
      //await(createPersonal(connection));
      //await(createUsers(connection));
    //await connection runMigrations();

}).catch(error => console.log(error));


