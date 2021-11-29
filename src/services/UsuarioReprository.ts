import { Usuario } from "../models/entities/Usuario";

export interface IUsuarioRepository {
  get(): Promise<Usuario[] | null>;
  getOne(idusuario: number): Promise<Usuario | null>;
  add(usuario: Usuario): Promise<Usuario | null>;
  delete(idusuario: number): Promise<Usuario | null>;
}
