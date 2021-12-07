import { Request, Response } from "express";
import { getRepository } from "typeorm";
import { UsuarioEmpresa } from "../entities/UsuarioEmpresa";

export const getUsuarioEmpresas = async (
  req: Request,
  res: Response
): Promise<Response> => {
  const usuarioEmpresas = await getRepository(UsuarioEmpresa).find();
  return res.json(usuarioEmpresas);
};

export const getUsuarioEmpresa = async (
  req: Request,
  res: Response
): Promise<Response> => {
  const results = await getRepository(UsuarioEmpresa).findOne(req.params.id);
  return res.json(results);
};

export const createUsuarioEmpresa = async (
  req: Request,
  res: Response
): Promise<Response> => {
  const newUsuarioEmpresa = await getRepository(UsuarioEmpresa).create(req.body);
  const results = await getRepository(UsuarioEmpresa).save(newUsuarioEmpresa);
  return res.json(results);
};

export const updateUsuarioEmpresa = async (
  req: Request,
  res: Response
): Promise<Response> => {
  const usuarioEmpresa = await getRepository(UsuarioEmpresa).findOne(req.params.id);
  if (usuarioEmpresa) {
    getRepository(UsuarioEmpresa).merge(usuarioEmpresa, req.body);
    const results = await getRepository(UsuarioEmpresa).save(usuarioEmpresa);
    return res.json(results);
  }

  return res.json({msg: 'UsuarioEmpresa no Encontrado'});
};

export const deleteUsuarioEmpresa = async (req: Request, res: Response): Promise<Response> => {
  const results = await getRepository(UsuarioEmpresa).delete(req.params.id);
  return res.json(results);
};