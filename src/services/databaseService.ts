import EventEmitter = require("events");
import { createConnection } from "typeorm";
import config from "../../config/config";
import { Logger } from "../../lib/logger";
import { User } from "../models/entities/User";
import { Afp } from "../models/entities/Afp";
import { AfpTrabajador } from "../models/entities/AfpTrabajador";
import { Cargo } from "../models/entities/Cargo";
import { Empresa } from "../models/entities/Empresa";
import { ModuloEmpresa } from "../models/entities/ModuloEmpresa";
import { Modulo } from "../models/entities/Modulo";
import { Salud } from "../models/entities/Salud";
import { Tipocontrato } from "../models/entities/Tipocontrato";
import { Trabajador } from "../models/entities/Trabajador";
import { Usuario } from "../models/entities/Usuario";
import { UsuarioEmpresa } from "../models/entities/UsuarioEmpresa";

class DatabaseService {
  public static emitter: EventEmitter = new EventEmitter();
  public static isConnected = false;
  public static logger: any = new Logger();

  public static async getConnection(callback = null, wait = false) {
    DatabaseService.handleConnectionError();
    return await DatabaseService.createConnection();
  }

  public static async createConnection() {
    const dbConfig = config[`${process.env.ENV}`];
    return await createConnection({
      type: "mysql",
      host: dbConfig.host,
      port: parseInt(dbConfig.port),
      username: dbConfig.username,
      password: dbConfig.password,
      database: dbConfig.database,
      entities: [
        Afp,
        AfpTrabajador,
        Cargo,
        Empresa,
        Modulo,
        ModuloEmpresa,
        Salud,
        Tipocontrato,
        Trabajador,
        User,
        Usuario,
        UsuarioEmpresa,
      ],
    })
      .then(() => {
        DatabaseService.isConnected = true;
        DatabaseService.logger.log(
          "info",
          "Conectado a Base de Datos con Exito"
        );
      })
      .catch((err: Error) => {
        DatabaseService.logger.log(
          "info",
          "Error de Conexion a Base de Datos Intentando Nuevamente"
        );
        DatabaseService.emitter.emit("DB_CONNECT_ERROR");
      });
  }
  public static async handleConnectionError() {
    DatabaseService.emitter.on("DB_CONNECT_ERROR", async () => {
      DatabaseService.logger.log(
        "info",
        "error de conexion .....intentando nuevamente"
      );
      setTimeout(async () => {
        await DatabaseService.createConnection();
      }, 3000);
    });
  }
}

export { DatabaseService };
