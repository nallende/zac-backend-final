import { Router } from "express";
const router = Router();

import {
    getUsuarios,
    getUsuario,
    createUsuario,
    updateUsuario,
    deleteUsuario
  } from "../controller/UsuarioController";



router.get("/usuarios", getUsuarios);
router.get("/usuario/:id", getUsuario);
router.post("/usuario", createUsuario);
router.put("/usuario/:id", updateUsuario);
router.delete("/usuario/:id", deleteUsuario);

export default router;
