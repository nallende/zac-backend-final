import { Request, Response } from "express";
import { getRepository } from "typeorm";
import { Empresa } from "../entities/Empresa";

export const getEmpresas = async (
  req: Request,
  res: Response
): Promise<Response> => {
  const empresas = await getRepository(Empresa).find();
  return res.json(empresas);
};

export const getEmpresa = async (
  req: Request,
  res: Response
): Promise<Response> => {
  const results = await getRepository(Empresa).findOne(req.params.id);
  return res.json(results);
};

export const createEmpresa = async (
  req: Request,
  res: Response
): Promise<Response> => {
  const newEmpresa = await getRepository(Empresa).create(req.body);
  const results = await getRepository(Empresa).save(newEmpresa);
  return res.json(results);
};

export const updateEmpresa = async (
  req: Request,
  res: Response
): Promise<Response> => {
  const empresa = await getRepository(Empresa).findOne(req.params.id);
  if (empresa) {
    getRepository(Empresa).merge(empresa, req.body);
    const results = await getRepository(Empresa).save(empresa);
    return res.json(results);
  }

  return res.json({msg: 'UPEmpresano Encontrado'});
};

export const deleteEmpresa = async (req: Request, res: Response): Promise<Response> => {
  const results = await getRepository(Empresa).delete(req.params.id);
  return res.json(results);
};