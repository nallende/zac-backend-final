import { Request, Response } from "express";
import { getRepository } from "typeorm";
import { Afp } from "../entities/Afp";

export const getAfps = async (
  req: Request,
  res: Response
): Promise<Response> => {
  const afp = await getRepository(Afp)
  .createQueryBuilder()
  .addSelect("case(estado) when 0 then 'No Vigente' when 1 then 'Vigente' end", "estadotexto")
  .getRawMany()
  return res.json(afp);
};

export const getAfp = async (
  req: Request,
  res: Response
): Promise<Response> => {
  const results = await getRepository(Afp).findOne(req.params.id);
  return res.json(results);
};

export const createAfp = async (
  req: Request,
  res: Response
): Promise<Response> => {
  const newAfp = await getRepository(Afp).create(req.body);
  const results = await getRepository(Afp).save(newAfp);
  return res.json(results);
};

export const updateAfp = async (
  req: Request,
  res: Response
): Promise<Response> => {
  const afp = await getRepository(Afp).findOne(req.params.id);
  if (afp) {
    getRepository(Afp).merge(afp, req.body);
    const results = await getRepository(Afp).save(afp);
    return res.json(results);
  }

  return res.json({msg: 'Afp no Encontrada'});
};

export const deleteAfp = async (req: Request, res: Response): Promise<Response> => {
  const results = await getRepository(Afp).delete(req.params.id);
  return res.json(results);
};
