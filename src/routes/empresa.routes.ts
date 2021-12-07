import { Router } from "express";
const router = Router();

import {
    getEmpresas,
    getEmpresa,
    createEmpresa,
    updateEmpresa,
    deleteEmpresa
  } from "../controller/EmpresaController";

router.get("/empresa", getEmpresas);
router.get("/empresa/:id", getEmpresa);
router.post("/empresa", createEmpresa);
router.put("/empresa/:id",updateEmpresa);
router.delete("/empresa/:id", deleteEmpresa);


export default router;