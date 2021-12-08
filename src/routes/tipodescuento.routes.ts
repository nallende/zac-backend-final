import { Router } from "express";
const router = Router();

import {
    getTipoDescuentos,
    getTipoDescuento,
    createTipoDescuento,
    updateTipoDescuento,
    deleteTipoDescuento
  } from "../controller/TipoDescuentoController";

router.get("/tipodescuento", getTipoDescuentos);
router.get("/tipodescuento/:id", getTipoDescuento);
router.post("/tipodescuento", createTipoDescuento);
router.put("/tipodescuento/:id",updateTipoDescuento);
router.delete("/tipodescuento/:id", deleteTipoDescuento);


export default router;