import express from "express";
import { UpdateUsers, deleteUsers, getUsers } from "../controllers/userController";
import { verifyToken } from "../middleware/verifyToken";

const router = express.Router();

router.get("/", getUsers);

router.get("/:id", verifyToken, getUsers);

router.get("/:id", verifyToken, deleteUsers);

router.put("/:id", verifyToken, UpdateUsers);



export default router;