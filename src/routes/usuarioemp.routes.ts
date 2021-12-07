import { Router } from "express";
const router = Router();
import {
    getUsuarioEmpresas,
    getUsuarioEmpresa,
    createUsuarioEmpresa,
    updateUsuarioEmpresa,
    deleteUsuarioEmpresa
  } from "../controller/UsuarioEmpController";



router.get("/usuarioempresas",getUsuarioEmpresas);
router.get("/usuarioempresa/:id",getUsuarioEmpresa);
router.post("/usuarioempresa", createUsuarioEmpresa);
router.put("/usuarioempresa/:id",updateUsuarioEmpresa);
router.delete("/usuarioempresa/:id",deleteUsuarioEmpresa);

export default router;