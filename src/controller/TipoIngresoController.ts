import { Request, Response } from "express";
import { getRepository } from "typeorm";
import { TipoIngreso } from "../entities/TipoIngreso";

export const getTipoIngresos = async (
  req: Request,
  res: Response
): Promise<Response> => {
  const tipoIngresos = await getRepository(TipoIngreso).find();
  return res.json(tipoIngresos);
};

export const getTipoIngreso = async (
  req: Request,
  res: Response
): Promise<Response> => {
  const results = await getRepository(TipoIngreso).findOne(req.params.id);
  return res.json(results);
};

export const createTipoIngreso = async (
  req: Request,
  res: Response
): Promise<Response> => {
  const newTipoIngreso = await getRepository(TipoIngreso).create(req.body);
  const results = await getRepository(TipoIngreso).save(newTipoIngreso);
  return res.json(results);
};

export const updateTipoIngreso = async (
  req: Request,
  res: Response
): Promise<Response> => {
  const tipoIngreso = await getRepository(TipoIngreso).findOne(req.params.id);
  if (tipoIngreso) {
    getRepository(TipoIngreso).merge(tipoIngreso, req.body);
    const results = await getRepository(TipoIngreso).save(tipoIngreso);
    return res.json(results);
  }

  return res.json({msg: 'TipoIngreso no Encontrado'});
};

export const deleteTipoIngreso = async (req: Request, res: Response): Promise<Response> => {
  const results = await getRepository(TipoIngreso).delete(req.params.id);
  return res.json(results);
};