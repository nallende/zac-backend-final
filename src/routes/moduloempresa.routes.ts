import { Router } from "express";
const router = Router();

import {
    getModuloEmpresas,
    getModuloEmpresa,
    createModuloEmpresa,
    updateModuloEmpresa,
    deleteModuloEmpresa
  } from "../controller/ModuloEmpresaController";

router.get("/moduloempresa", getModuloEmpresas);
router.get("/moduloempresa/:id", getModuloEmpresa);
router.post("/moduloempresa", createModuloEmpresa);
router.put("/moduloempresa/:id",updateModuloEmpresa);
router.delete("/moduloempresa/:id", deleteModuloEmpresa);


export default router;