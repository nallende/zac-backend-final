import { Router } from "express";
const router = Router();

import {
    getCargos,
    getCargo,
    createCargo,
    updateCargo,
    deleteCargo
  } from "../controller/CargoController";

router.get("/cargo", getCargos);
router.get("/cargo/:id", getCargo);
router.post("/cargo", createCargo);
router.put("/cargo/:id",updateCargo);
router.delete("/cargo/:id", deleteCargo);


export default router;