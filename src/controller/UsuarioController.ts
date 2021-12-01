import { Request, Response, NextFunction } from "express";
import { getRepository } from "typeorm";
//import { UsuarioService } from "../services/UsuarioService";
//import Template from "../global/response";
//import { ServerException } from "../../lib/custom-errors";
//import APIError from "../global/response/apierror";

//const service = new UsuarioService();

class UsuarioController {
//   public static listAll = (req: Request, res: Response, next: any) => {
//     service
//       .get()
//       .then((usuarios) => {
//         if (usuarios && usuarios.length > 0) {
//           res.json(
//             Template.success(usuarios, "Se ha creado Usuario existosamente")
//           );
//         } else {
//           res.json(
//             Template.success(usuarios, "Se ha creado Usuario existosamente")
//           );
//         }
//       })
//       .catch((err) => {
//         next(new ServerException("error occured"));
//       });
//   };

//   // public static GetOneUser(req: Request, res: Response, next: NextFunction) {
//   //   service
//   //     .getOne(idusuario)
//   //     .then((data: any) => {
//   //       if (data) {
//   //         res.status(200).json(data);
//   //       } else {
//   //         res.status(200).json({ data: [] });
//   //       }
//   //     })
//   //     .catch((err: Error) => {
//   //       next(new Error(" ha ocurrido unerror"));
//   //     });
//   // }

//   public static addNew = (req: Request, res: Response, next: any) => {
//     service
//       .add(req.body)
//       .then((usuario) => {
//         if (usuario) {
//           res.json(Template.success(usuario, "Usuario Guardado"));
//         }
//       })
//       .catch((err) => {
//         if (err.ErrorID == 2110) {
//           next(new APIError(err.message, err.ErrorID));
//         }
//         next(new ServerException("ha ocurrido un error"));
//       });
//   };
// }
}
export default UsuarioController;
