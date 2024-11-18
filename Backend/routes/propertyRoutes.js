import express from "express";
import multer from "multer";
import { addProperty } from "../controllers/propertyController.js";

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

export default router;
