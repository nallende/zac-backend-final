import { Request, Response } from "express";
import { getRepository } from "typeorm";
import { Modulo } from "../entities/Modulo";

export const getModulos = async (
  req: Request,
  res: Response
): Promise<Response> => {
  const modulo = await getRepository(Modulo).find();
  return res.json(modulo);
};

export const getModulo = async (
  req: Request,
  res: Response
): Promise<Response> => {
  const results = await getRepository(Modulo).findOne(req.params.id);
  return res.json(results);
};

export const createModulo = async (
  req: Request,
  res: Response
): Promise<Response> => {
  const newModulo = await getRepository(Modulo).create(req.body);
  const results = await getRepository(Modulo).save(newModulo);
  return res.json(results);
};

export const updateModulo = async (
  req: Request,
  res: Response
): Promise<Response> => {
  const modulo = await getRepository(Modulo).findOne(req.params.id);
  if (modulo) {
    getRepository(Modulo).merge(modulo, req.body);
    const results = await getRepository(Modulo).save(modulo);
    return res.json(results);
  }

  return res.json({msg: 'Modulo no Encontrada'});
};

export const deleteModulo = async (req: Request, res: Response): Promise<Response> => {
  const results = await getRepository(Modulo).delete(req.params.id);
  return res.json(results);
};
