import { Router } from "express";
const router = Router();

import {
    getSaluds,
    getSalud,
    createSalud,
    updateSalud,
    deleteSalud
  } from "../controller/SaludController";

router.get("/salud", getSaluds);
router.get("/salud/:id", getSalud);
router.post("/salud", createSalud);
router.put("/salud/:id",updateSalud);
router.delete("/salud/:id", deleteSalud);


export default router;