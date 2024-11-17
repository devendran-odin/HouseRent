import express from "express";
import userRoutes from "./userRoutes.js";
// import propertyRoutes from "./propertyRoutes.js";

const router = express.Router();

router.use("/users", userRoutes);
// router.use("/properties", propertyRoutes);

export default router;
