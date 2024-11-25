import express from "express";
import {handleBookingRequest ,getBookings, getApprovals, acceptBooking, rejectBooking} from "../controllers/bookingController.js"
import {authenticateToken} from "../middleware/jwtAuth.js"

const router = express.Router();

router.post("/request", handleBookingRequest);
router.get("/getAllRequest",authenticateToken, getBookings);
router.get("/approvals",authenticateToken, getApprovals);
router.post("/:bookingId/accept",authenticateToken, acceptBooking);
router.post("/:bookingId/reject",authenticateToken,rejectBooking );

export default router;
