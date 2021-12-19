
import { createConnection} from 'typeorm'

import app from './app';

import {createUsuarios, createPersonal, createUsers } from './utils'    

createConnection().then(async connection => {

    // se activa Servidor
    const port = 3001
    app.listen(process.env.PORT || 3001, ()=>console.log(`Servidor activo en http://localhost:${port}`));
    
    await connection.synchronize(false)
    // await(createUsuarios(connection));
    // await(createPersonal(connection));
   //  await(createUsers(connection));
    //await connection.runMigrations()

}).catch(error => console.log(error));


