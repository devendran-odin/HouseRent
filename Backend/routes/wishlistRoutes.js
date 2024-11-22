import express from "express";
import {addWishlist, getAllWishlist, removeWishlistItem} from "../controllers/wishlistController.js"
import {authenticateToken} from "../middleware/jwtAuth.js"

const router = express.Router();

router.post("/add",addWishlist);
router.get("/getAll", authenticateToken, getAllWishlist);
router.delete("/:propertyId", authenticateToken, removeWishlistItem);
export default router;