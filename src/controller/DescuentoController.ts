import { Request, Response } from "express";
import { getRepository } from "typeorm";
import { Descuento } from "../entities/Descuento";

export const getDescuentos = async (
  req: Request,
  res: Response
): Promise<Response> => {
  const descuento = await getRepository(Descuento).find();
  return res.json(descuento);
};

export const getDescuento = async (
  req: Request,
  res: Response
): Promise<Response> => {
  const results = await getRepository(Descuento).findOne(req.params.id);
  return res.json(results);
};

export const createDescuento = async (
  req: Request,
  res: Response
): Promise<Response> => {
  const newDescuento = await getRepository(Descuento).create(req.body);
  const results = await getRepository(Descuento).save(newDescuento);
  return res.json(results);
};

export const updateDescuento = async (
  req: Request,
  res: Response
): Promise<Response> => {
  const descuento = await getRepository(Descuento).findOne(req.params.id);
  if (descuento) {
    getRepository(Descuento).merge(descuento, req.body);
    const results = await getRepository(Descuento).save(descuento);
    return res.json(results);
  }

  return res.json({msg: 'Descuento no Encontrada'});
};

export const deleteDescuento = async (req: Request, res: Response): Promise<Response> => {
  const results = await getRepository(Descuento).delete(req.params.id);
  return res.json(results);
};
