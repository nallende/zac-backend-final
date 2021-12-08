import { Request, Response } from "express";
import { getRepository } from "typeorm";
import { Cargo } from "../entities/Cargo";

export const getCargos = async (
  req: Request,
  res: Response
): Promise<Response> => {
  const cargo = await getRepository(Cargo).find();
  return res.json(cargo);
};

export const getCargo = async (
  req: Request,
  res: Response
): Promise<Response> => {
  const results = await getRepository(Cargo).findOne(req.params.id);
  return res.json(results);
};

export const createCargo = async (
  req: Request,
  res: Response
): Promise<Response> => {
  const newCargo = await getRepository(Cargo).create(req.body);
  const results = await getRepository(Cargo).save(newCargo);
  return res.json(results);
};

export const updateCargo = async (
  req: Request,
  res: Response
): Promise<Response> => {
  const cargo = await getRepository(Cargo).findOne(req.params.id);
  if (cargo) {
    getRepository(Cargo).merge(cargo, req.body);
    const results = await getRepository(Cargo).save(cargo);
    return res.json(results);
  }

  return res.json({msg: 'Cargo no Encontrado'});
};

export const deleteCargo = async (req: Request, res: Response): Promise<Response> => {
  const results = await getRepository(Cargo).delete(req.params.id);
  return res.json(results);
};
