import { Request, Response } from "express";
import { getRepository } from "typeorm";
import { Personal } from "../entities/Personal";

export const getPersonals = async (
  req: Request,
  res: Response
): Promise<Response> => {
  const personals = await getRepository(Personal).find();
  return res.json(personals);
};

export const getPersonal = async (
  req: Request,
  res: Response
): Promise<Response> => {
  const results = await getRepository(Personal).findOne(req.params.id);
  return res.json(results);
};

export const createPersonal = async (
  req: Request,
  res: Response
): Promise<Response> => {
  const newPersonal = await getRepository(Personal).create(req.body);
  const results = await getRepository(Personal).save(newPersonal);
  return res.json(results);
};

export const updatePersonal = async (
  req: Request,
  res: Response
): Promise<Response> => {
  const personal = await getRepository(Personal).findOne(req.params.id);
  if (personal) {
    getRepository(Personal).merge(personal, req.body);
    const results = await getRepository(Personal).save(personal);
    return res.json(results);
  }

  return res.json({msg: 'UPersonalno Encontrado'});
};

export const deletePersonal = async (req: Request, res: Response): Promise<Response> => {
  const results = await getRepository(Personal).delete(req.params.id);
  return res.json(results);
};