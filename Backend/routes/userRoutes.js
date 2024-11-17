import express from "express";
import { signup, login, getUser } from "../controllers/userController.js";
import {authenticateToken} from "../middleware/jwtAuth.js"

const router = express.Router();

router.post("/signup", signup);
router.post("/login", login);
router.get("/getUser", authenticateToken, getUser);

export default router;
