import { Router } from "express";
const router = Router();

import {
    getModulos,
    getModulo,
    createModulo,
    updateModulo,
    deleteModulo
  } from "../controller/ModuloController";

router.get("/modulo", getModulos);
router.get("/modulo/:id", getModulo);
router.post("/modulo", createModulo);
router.put("/modulo/:id",updateModulo);
router.delete("/modulo/:id", deleteModulo);


export default router;