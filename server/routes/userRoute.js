import express from "express";
import { UpdateUsers, deleteUsers, getUsers } from "../controllers/userController.js";
import { verifyToken } from "../middleware/verifyToken.js";

const router = express.Router();

router.get("/", getUsers);

router.get("/:id", verifyToken, getUsers);

router.get("/:id", verifyToken, deleteUsers);

router.put("/:id", verifyToken, UpdateUsers);



export default router;