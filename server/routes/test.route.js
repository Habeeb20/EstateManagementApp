import express from "express";
import { shouldBeAdmin, shouldBeLoggedIn } from "../controllers/text.controller";
import { verifyToken } from "../middleware/verifyToken";

const testRoute = express.Router();


testRoute.get("should-be-logged-in", verifyToken, shouldBeLoggedIn)
testRoute.get("should-be-admin", shouldBeAdmin)

export default testRoute