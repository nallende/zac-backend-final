import { Router } from "express";
const router = Router();

import {
    getTipocontratos,
    getTipocontrato,
    createTipocontrato,
    updateTipocontrato,
    deleteTipocontrato
  } from "../controller/TipoContratoController";

router.get("/tipocontrato", getTipocontratos);
router.get("/tipocontrato/:id", getTipocontrato);
router.post("/tipocontrato", createTipocontrato);
router.put("/tipocontrato/:id",updateTipocontrato);
router.delete("/tipocontrato/:id", deleteTipocontrato);


export default router;