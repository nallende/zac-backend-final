import { IUsuarioRepository } from "./UsuarioReprository";
import { Usuario } from "../models/entities/Usuario";
import { getRepository } from "typeorm";
import { Request } from "express";
import { IUsuario } from "../models/Usuario";
import APIError from "../global/response/apierror";
import Err from "../global/response/errorcode";

export class UsuarioService implements IUsuarioRepository {
  async get(): Promise<Usuario[] | null> {
    // Usuario desde la Base de Datos
    try {
      const usuarioRepository = getRepository(Usuario);
      const usuarios = await usuarioRepository.find({});
      return usuarios;
    } catch (error) {
      return null;
    }
  }

  async getOne(idusuario: number): Promise<Usuario | null> {
    const usuarioRepository = getRepository(Usuario);
    try {
      const usuario = await usuarioRepository.findOneOrFail(idusuario);
      return usuario;
    } catch (error) {
      return null;
    }
  }
  async add(model: IUsuario): Promise<Usuario | null> {
    const {
      usuaNombre,
      usuaApellido,
      usuaMail,
      usuaTelefono,
      usuaPassword,
      usuaFeccre,
      usuaFecmod,
      usuaEstado,
    } = model;
    const usuario = new Usuario();
    usuario.usuaNombre = usuaNombre;
    usuario.usuaApellido = usuaApellido;
    usuario.usuaMail = usuaMail;
    usuario.usuaTelefono = usuaTelefono;
    //usuario.usuaLogin =
    usuario.usuaPassword = usuaPassword;
    usuario.usuaFeccre = usuaFeccre;
    usuario.usuaFecmod = usuaFecmod;
    usuario.usuaEstado = usuaEstado;
    const usuarioRepository = getRepository(Usuario);
    try {
      const savedUsuario = await usuarioRepository.save(usuario);
      return savedUsuario;
    } catch (e) {
      console.log(e);
      return Promise.reject(
        new APIError("Usuario ya existe", Err.EmailAlreadyExists)
      );
    }
  }

  async delete(idusuario: number): Promise<Usuario | null> {
    const usuarioRepository = getRepository(Usuario);
    let usuario: Usuario;
    try {
      usuario = await usuarioRepository.findOneOrFail(idusuario);
      if (usuario) {
        usuarioRepository.delete(idusuario);
      }
      return null;
    } catch (error) {
      return null;
    }
  }
}
