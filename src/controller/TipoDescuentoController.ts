import { Request, Response } from "express";
import { getRepository } from "typeorm";
import { Tipodescuento } from "../entities";

export const getTipoDescuentos = async (
  req: Request,
  res: Response
): Promise<Response> => {
  const tipoDescuento = await getRepository(Tipodescuento)
  .createQueryBuilder()
  .addSelect("case(estado) when 0 then 'No Vigente' when 1 then 'Vigente' end", "estadotexto")
  .getRawMany()
  return res.json(tipoDescuento);
};

export const getTipoDescuento = async (
  req: Request,
  res: Response
): Promise<Response> => {
  const results = await getRepository(Tipodescuento).findOne(req.params.id);
  return res.json(results);
};

export const createTipoDescuento = async (
  req: Request,
  res: Response
): Promise<Response> => {
  const newTipoDescuento = await getRepository(Tipodescuento).create(req.body);
  const results = await getRepository(Tipodescuento).save(newTipoDescuento);
  return res.json(results);
};

export const updateTipoDescuento = async (
  req: Request,
  res: Response
): Promise<Response> => {
  const tipoDescuento = await getRepository(Tipodescuento).findOne(req.params.id);
  if (tipoDescuento) {
    getRepository(Tipodescuento).merge(tipoDescuento, req.body);
    const results = await getRepository(Tipodescuento).save(tipoDescuento);
    return res.json(results);
  }

  return res.json({msg: 'ATipoDescuento no Encontrada'});
};

export const deleteTipoDescuento = async (req: Request, res: Response): Promise<Response> => {
  const results = await getRepository(Tipodescuento).delete(req.params.id);
  return res.json(results);
};
