import { Request, Response } from "express";
import { getRepository } from "typeorm";
import { ModuloEmpresa } from "../entities/ModuloEmpresa";

export const getModuloEmpresas = async (
  req: Request,
  res: Response
): Promise<Response> => {
  const moduloEmpresa = await getRepository(ModuloEmpresa)
  .createQueryBuilder()
  .addSelect("case(estado) when 0 then 'No Vigente' when 1 then 'Vigente' end", "estadotexto")
  .getRawMany()
  return res.json(moduloEmpresa);
};

export const getModuloEmpresa = async (
  req: Request,
  res: Response
): Promise<Response> => {
  const results = await getRepository(ModuloEmpresa).findOne(req.params.id);
  return res.json(results);
};

export const createModuloEmpresa = async (
  req: Request,
  res: Response
): Promise<Response> => {
  const newModuloEmpresa = await getRepository(ModuloEmpresa).create(req.body);
  const results = await getRepository(ModuloEmpresa).save(newModuloEmpresa);
  return res.json(results);
};

export const updateModuloEmpresa = async (
  req: Request,
  res: Response
): Promise<Response> => {
  const moduloEmpresa = await getRepository(ModuloEmpresa).findOne(req.params.id);
  if (moduloEmpresa) {
    getRepository(ModuloEmpresa).merge(moduloEmpresa, req.body);
    const results = await getRepository(ModuloEmpresa).save(moduloEmpresa);
    return res.json(results);
  }

  return res.json({msg: 'ModuloEmpresa no Encontrada'});
};

export const deleteModuloEmpresa = async (req: Request, res: Response): Promise<Response> => {
  const results = await getRepository(ModuloEmpresa).delete(req.params.id);
  return res.json(results);
};
