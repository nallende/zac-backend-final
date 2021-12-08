import { Request, Response } from "express";
import { getRepository } from "typeorm";
import { Tipocontrato } from "../entities/TipoContrato";

export const getTipocontratos = async (
  req: Request,
  res: Response
): Promise<Response> => {
  const tipocontrato = await getRepository(Tipocontrato).find();
  return res.json(Tipocontrato);
};

export const getTipocontrato = async (
  req: Request,
  res: Response
): Promise<Response> => {
  const results = await getRepository(Tipocontrato).findOne(req.params.id);
  return res.json(results);
};

export const createTipocontrato = async (
  req: Request,
  res: Response
): Promise<Response> => {
  const newTipocontrato = await getRepository(Tipocontrato).create(req.body);
  const results = await getRepository(Tipocontrato).save(newTipocontrato);
  return res.json(results);
};

export const updateTipocontrato = async (
  req: Request,
  res: Response
): Promise<Response> => {
  const tipocontrato = await getRepository(Tipocontrato).findOne(req.params.id);
  if (tipocontrato) {
    getRepository(Tipocontrato).merge(tipocontrato, req.body);
    const results = await getRepository(Tipocontrato).save(tipocontrato);
    return res.json(results);
  }

  return res.json({msg: 'ATipocontrato no Encontrada'});
};

export const deleteTipocontrato = async (req: Request, res: Response): Promise<Response> => {
  const results = await getRepository(Tipocontrato).delete(req.params.id);
  return res.json(results);
};
