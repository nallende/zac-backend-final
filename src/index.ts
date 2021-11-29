import "reflect-metadata";
import {createConnection} from "typeorm";
import {Afp, AfpTrabajador, Cargo, Empresa,
     Modulo, ModuloEmpresa, Salud, Tipocontrato, Trabajador, 
     Usuario, UsuarioEmpresa,User} from "./models";

import {createUsuarios} from './utils'    

createConnection().then(async connection => {

    console.log("Insertando a db zac...");
    const user = new User();
    // user.firstName = "Timber";
    // user.lastName = "Saw";
    // user.age = 25;
    await connection.manager.save(user);
    console.log("Saved a new user with id: " + user.id);

    console.log("Loading users from the database...");
    const users = await connection.manager.find(User);
    console.log("Loaded users: ", users);

    console.log("Here you can setup and run express/koa/any other framework.");

}).catch(error => console.log(error));
