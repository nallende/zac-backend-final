import { Router } from "express";
const router = Router();

import {
    getTipoIngresos,
    getTipoIngreso,
    createTipoIngreso,
    updateTipoIngreso,
    deleteTipoIngreso
  } from "../controller/TipoIngresoController";



router.get("/tipoIngresos", getTipoIngresos);
router.get("/tipoIngresos/:id", getTipoIngreso);
router.post("/tipoIngresos", createTipoIngreso);
router.put("/tipoIngresos/:id", updateTipoIngreso);
router.delete("/tipoIngresos/:id", deleteTipoIngreso);

export default router;