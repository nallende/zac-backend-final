import { Router } from "express";
const router = Router();

import {
    getAllUsers,
    getUsers,
    createUsers,
    updateUsers,
    deleteUsers
  } from "../controller/UserController";

router.get("/users", getAllUsers);
router.get("/users/:id", getUsers);
router.post("/users", createUsers);
router.put("/users/:id",updateUsers);
router.delete("/users/:id", deleteUsers);


export default router;