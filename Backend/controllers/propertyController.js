import cloudinary from "cloudinary"
import Property from "../models/propertyModal.js";
import Booking from "../models/bookingModal.js";
import fs from "fs";
import path from "path";

export const getAllOwnerProperties = async (req, res) => {

  try {
    const properties = await Property.find({ userId: req.user.userId }).sort({ postedDate: -1 });
    res.status(200).json(properties);
  } catch (error) {
    console.error("Error da fetching properties:", error);
    res.status(500).json({ message: "Failed to fetch properties" });
  }
};


export const addProperty = async (req, res) => {

    cloudinary.config({
        cloud_name: process.env.CLOUDINARY_CLOUD_NAME,
        api_key: process.env.CLOUDINARY_API_KEY,
        api_secret: process.env.CLOUDINARY_API_SECRET,
      });

    const { userId, address, city, rentAmount, propertyType, description, locationLink, postedDate } = req.body;
    const image =  req.file; // Image from the upload
  
    if (!userId || !address || !city || !rentAmount || !propertyType || !description || !postedDate || !image) {
      return res.status(400).json({ message: "All fields are required" });
    }
  
    try {
      // Upload image to Cloudinary
      const uploadResponse = await cloudinary.uploader.upload(image.path);
    //   console.log(uploadResponse)
      // Create new property object
      const newProperty = new Property({
        userId,
        address,
        city,
        rentAmount,
        propertyType,
        description,
        locationLink,
        postedDate,
        image: uploadResponse.secure_url, // Store Cloudinary URL here
      });
  
      // Save the property to the database
      await newProperty.save();

      // Delete the file from uploads folder
      fs.unlink(image.path, (err) => {
        if (err) {
          console.error("Failed to delete file:", err);
        } else {
          console.log(`File ${image.path} deleted successfully.`);
        }
      });
  
      return res.status(200).json({ message: "Property added successfully!", property: newProperty });
    } catch (error) {
      console.error("Error while adding property:", error);  // Log error details
      return res.status(500).json({ message: error.message });
    }
  };
  

export const getAllProperty = async (req, res) => {
    try {
        const properties = await Property.find();
        res.status(200).json(properties);
      } catch (error) {
        res.status(500).json({ message: 'Error fetching properties', error });
      }
}


export const getPropertyByID = async(req, res) => {
    try {
        const { id } = req.params;
        const property = await Property.findById(id);
        if (!property) {
          return res.status(404).json({ message: 'Property not found' });
        }
        res.status(200).json(property);
      } catch (error) {
        res.status(500).json({ message: 'Error fetching property', error });
      }
    
}

export const filterProperty = async (req, res) => {
    const { bhk, location, priceRange } = req.body;
  
    if (!bhk || !location || !priceRange) {
      return res.status(400).json({ error: "All filters are required." });
    }
    try {
      // Normalize bhk to match database format
      const normalizedBhk = bhk.replace(/\s+/g, ""); //Removes spaces, eg "1 BHK" -> "1BHK"
      const [minPrice, maxPrice] = priceRange.split("-").map(Number);

      // Query the database
      const filteredProperties = await Property.find({
        propertyType: normalizedBhk,
        city: location,
        rentAmount: { $gte: minPrice, $lte: maxPrice },
      });

      res.status(200).json(filteredProperties);

    } catch (error) {
      console.error("Error filtering properties:", error);
      res.status(500).json({ error: "Server error while filtering properties." });
    }
};


export const deleteProperty = async (req, res) => {
  try {
    const propertyId = req.params.propertyId;

    // Check if the property exists
    const property = await Property.findById(propertyId);
    if (!property) {
      return res.status(404).json({ message: "Property not found" });
    }

    if (property.userId.toString() !== req.user.userId && req.user.role !== 'admin') {
      return res.status(403).json({ message: "Unauthorized action" });
    }

    // Delete related bookings before deleting the property
    await Booking.deleteMany({ propertyId: propertyId });

    await Property.deleteOne({ _id: propertyId });

    return res.status(200).json({ message: "Property and related bookings deleted successfully" });
  } catch (error) {
    console.error("Error deleting property:", error);
    return res.status(500).json({ message: "Failed to delete property" });
  }
};


export const getPropertyCount = async (req, res) => {
  try {
    const totalProperties = await Property.countDocuments();
    res.json({ totalProperties });
  } catch (error) {
    res.status(500).json({ message: 'Error fetching total properties', error });
  }
}