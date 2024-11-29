import express from "express";
import { signup, login, getUser,getUserCount, getOwnerCount, getAllUser, deleteUserById } from "../controllers/userController.js";
import {authenticateToken} from "../middleware/jwtAuth.js"

const router = express.Router();

router.post("/signup", signup);
router.post("/login", login);
router.get("/getUser", authenticateToken, getUser);
router.get("/getAllUser", getAllUser)
router.get("/userCount", getUserCount);
router.get("/ownerCount", getOwnerCount);
router.delete("/:userId", deleteUserById)


export default router;
