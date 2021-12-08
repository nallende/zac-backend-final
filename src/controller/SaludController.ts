import { Request, Response } from "express";
import { getRepository } from "typeorm";
import { Salud } from "../entities/Salud";

export const getSaluds = async (
  req: Request,
  res: Response
): Promise<Response> => {
  const salud = await getRepository(Salud).find();
  return res.json(salud);
};

export const getSalud = async (
  req: Request,
  res: Response
): Promise<Response> => {
  const results = await getRepository(Salud).findOne(req.params.id);
  return res.json(results);
};

export const createSalud = async (
  req: Request,
  res: Response
): Promise<Response> => {
  const newSalud = await getRepository(Salud).create(req.body);
  const results = await getRepository(Salud).save(newSalud);
  return res.json(results);
};

export const updateSalud = async (
  req: Request,
  res: Response
): Promise<Response> => {
  const salud = await getRepository(Salud).findOne(req.params.id);
  if (salud) {
    getRepository(Salud).merge(salud, req.body);
    const results = await getRepository(Salud).save(salud);
    return res.json(results);
  }

  return res.json({msg: 'Prevision Salud no Encontrada'});
};

export const deleteSalud = async (req: Request, res: Response): Promise<Response> => {
  const results = await getRepository(Salud).delete(req.params.id);
  return res.json(results);
};
