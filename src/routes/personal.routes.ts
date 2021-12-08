import { Router } from "express";
const router = Router();

import {
    getAllPersonal,
    getPersonal,
    createPersonal,
    updatePersonal,
    deletePersonal
  } from "../controller/PersonalController";

router.get("/personal", getAllPersonal);
router.get("/personal/:id", getPersonal);
router.post("/personal", createPersonal);
router.put("/personal/:id",updatePersonal);
router.delete("/personal/:id", deletePersonal);


export default router;
