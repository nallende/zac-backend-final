import { Router } from "express";
const router = Router();

import {
    getAllSalud,
    getSalud,
    createSalud,
    updateSalud,
    deleteSalud
  } from "../controller/SaludController";

router.get("/salud", getAllSalud);
router.get("/salud/:id", getSalud);
router.post("/salud", createSalud);
router.put("/salud/:id",updateSalud);
router.delete("/salud/:id", deleteSalud);


export default router;