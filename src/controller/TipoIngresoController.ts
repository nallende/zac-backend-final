import { Request, Response } from "express";
import { getRepository } from "typeorm";
import { Tipoingreso } from "../entities/TipoIngreso";

export const getTipoIngresos = async (
  req: Request,
  res: Response
): Promise<Response> => {
  const tipoIngresos = await getRepository(Tipoingreso)
  .createQueryBuilder()
  .addSelect("case(estado) when 0 then 'No Vigente' when 1 then 'Vigente' end", "estadotexto")
  .getRawMany()
  return res.json(tipoIngresos);
};

export const getTipoIngreso = async (
  req: Request,
  res: Response
): Promise<Response> => {
  const results = await getRepository(Tipoingreso).findOne(req.params.id);
  return res.json(results);
};

export const createTipoIngreso = async (
  req: Request,
  res: Response
): Promise<Response> => {
  const newTipoIngreso = await getRepository(Tipoingreso).create(req.body);
  const results = await getRepository(Tipoingreso).save(newTipoIngreso);
  return res.json(results);
};

export const updateTipoIngreso = async (
  req: Request,
  res: Response
): Promise<Response> => {
  const tipoIngreso = await getRepository(Tipoingreso).findOne(req.params.id);
  if (tipoIngreso) {
    getRepository(Tipoingreso).merge(tipoIngreso, req.body);
    const results = await getRepository(Tipoingreso).save(tipoIngreso);
    return res.json(results);
  }

  return res.json({msg: 'TipoIngreso no Encontrado'});
};

export const deleteTipoIngreso = async (req: Request, res: Response): Promise<Response> => {
  const results = await getRepository(Tipoingreso).delete(req.params.id);
  return res.json(results);
};