import express from "express";
import multer from "multer";
import { addProperty, getAllProperty, getPropertyByID, filterProperty} from "../controllers/propertyController.js";
import {getAllOwnerProperties, deleteProperty} from "../controllers/propertyController.js"
import { authenticateToken } from "../middleware/jwtAuth.js";


const router = express.Router();

// Set up multer storage configuration
const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, 'uploads/'); // Save the file to the 'uploads' folder
  },
  filename: (req, file, cb) => {
    const timestamp = Date.now();
    cb(null, `${timestamp}-${file.originalname}`);
  }
});

// Multer middleware
const upload = multer({ storage: storage });

router.post("/addProperty", upload.single("image"), addProperty);

router.get("/getAllProperty", getAllProperty)

router.get("/getOwnerProperties", authenticateToken, getAllOwnerProperties)

router.post("/filters", filterProperty)

router.get("/:id", getPropertyByID)

router.delete("/:propertyId", authenticateToken, deleteProperty)

export default router;
