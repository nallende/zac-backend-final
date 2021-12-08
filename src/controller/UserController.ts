import { Request, Response } from "express";
import { getRepository } from "typeorm";
import { Users } from "../entities/Users";

export const getAllUsers = async (
  req: Request,
  res: Response
): Promise<Response> => {
  const users = await getRepository(Users)
  .createQueryBuilder()
  .addSelect("case(estado) when 0 then 'No Vigente' when 1 then 'Vigente' end", "estadotexto")
  .getRawMany()
  return res.json(users);
};

export const getUsers = async (
  req: Request,
  res: Response
): Promise<Response> => {
  const results = await getRepository(Users).findOne(req.params.id);
  return res.json(results);
};

export const createUsers = async (
  req: Request,
  res: Response
): Promise<Response> => {
  const newUsers = await getRepository(Users).create(req.body);
  const results = await getRepository(Users).save(newUsers);
  return res.json(results);
};

export const updateUsers = async (
  req: Request,
  res: Response
): Promise<Response> => {
  const users = await getRepository(Users).findOne(req.params.id);
  if (users) {
    getRepository(Users).merge(users, req.body);
    const results = await getRepository(Users).save(users);
    return res.json(results);
  }

  return res.json({msg: 'Users no Encontrada'});
};

export const deleteUsers = async (req: Request, res: Response): Promise<Response> => {
  const results = await getRepository(Users).delete(req.params.id);
  return res.json(results);
};
