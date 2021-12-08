import { Router } from "express";
const router = Router();

import {
    getDescuentos,
    getDescuento,
    createDescuento,
    updateDescuento,
    deleteDescuento
  } from "../controller/DescuentoController";

router.get("/descuento", getDescuentos);
router.get("/descuento/:id", getDescuento);
router.post("/descuento", createDescuento);
router.put("/descuento/:id",updateDescuento);
router.delete("/descuento/:id", deleteDescuento);


export default router;