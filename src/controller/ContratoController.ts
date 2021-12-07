import { Request, Response } from "express";
import { getRepository } from "typeorm";
import { Contrato } from "../entities/Contrato";

export const getContratos = async (
  req: Request,
  res: Response
): Promise<Response> => {
  const contratos = await getRepository(Contrato).find();
  return res.json(contratos);
};

export const getContrato = async (
  req: Request,
  res: Response
): Promise<Response> => {
  const results = await getRepository(Contrato).findOne(req.params.id);
  return res.json(results);
};

export const createContrato = async (
  req: Request,
  res: Response
): Promise<Response> => {
  const newContrato = await getRepository(Contrato).create(req.body);
  const results = await getRepository(Contrato).save(newContrato);
  return res.json(results);
};

export const updateContrato = async (
  req: Request,
  res: Response
): Promise<Response> => {
  const contrato = await getRepository(Contrato).findOne(req.params.id);
  if (contrato) {
    getRepository(Contrato).merge(contrato, req.body);
    const results = await getRepository(Contrato).save(contrato);
    return res.json(results);
  }

  return res.json({msg: 'Contrato no Encontrado'});
};

export const deleteContrato = async (req: Request, res: Response): Promise<Response> => {
  const results = await getRepository(Contrato).delete(req.params.id);
  return res.json(results);
};
