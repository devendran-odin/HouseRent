import express from "express";
import userRoutes from "./userRoutes.js";
import propertyRoutes from "./propertyRoutes.js";
import bookingRoutes from "./bookingRoutes.js"
import wishlistRoutes from "./wishlistRoutes.js"

const router = express.Router();

router.use("/users", userRoutes);
router.use("/properties", propertyRoutes);
router.use("/bookings",bookingRoutes);
router.use("/wishlist",wishlistRoutes);

export default router;
