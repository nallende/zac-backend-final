import { Router } from "express";
const router = Router();

import {
    getContratos,
    getContrato,
    createContrato,
    updateContrato,
    deleteContrato
  } from "../controller/ContratoController";

router.get("/contrato", getContratos);
router.get("/contrato/:id", getContrato);
router.post("/contrato", createContrato);
router.put("/contrato/:id",updateContrato);
router.delete("/contrato/:id", deleteContrato);


export default router;