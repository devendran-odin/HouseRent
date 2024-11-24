import express from "express";
import {handleBookingRequest ,getBookings} from "../controllers/bookingController.js"
import {authenticateToken} from "../middleware/jwtAuth.js"

const router = express.Router();

router.post("/request", handleBookingRequest);
router.get("/getAllRequest",authenticateToken, getBookings);

export default router;
