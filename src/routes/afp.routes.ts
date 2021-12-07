import { Router } from "express";
const router = Router();

import {
    getAfps,
    getAfp,
    createAfp,
    updateAfp,
    deleteAfp
  } from "../controller/AfpController";

router.get("/afp", getAfps);
router.get("/afp/:id", getAfp);
router.post("/afp", createAfp);
router.put("/afp/:id",updateAfp);
router.delete("/afp/:id", deleteAfp);


export default router;