import Booking from "../models/bookingModal.js"
import Property from "../models/propertyModal.js"
import { sendApprovalEmail } from "./emailContoller.js";

// Fetch booking approvals
export const getApprovals = async (req, res) => {
  try {
    const  ownerId  = req.user.userId;
    if (!ownerId) {
      return res.status(400).json({ message: "Owner ID is required." });
    }

    const bookings = await Booking.find({ ownerId, status: "Pending" })
      .populate("propertyId", "_id") 
      .populate("requesterId", "userName userEmail");

     const tenantBookings =  bookings.map((booking) => ({
        _id: booking._id,
        tenantId:booking.requesterId._id,
        tenantName: booking.requesterId.userName,
        tenantEmail: booking.requesterId.userEmail,
        propertyId: booking.propertyId._id,
        requestedDate: booking.createdAt,
      }))
      
    res.status(200).json(tenantBookings);
  } catch (error) {
    console.error("Error fetching approvals:", error);
    res.status(500).json({ message: "Server error." });
  }
};

// Accept booking
export const acceptBooking = async (req, res) => {
  try {
    const bookingId = req.params.bookingId;
    const { tenantEmail, tenantName } = req.body;
    const booking = await Booking.findById(bookingId).populate('propertyId');;
    if (!booking) {
      return res.status(404).json({ message: "Booking not found." });
    }

    booking.status = "Accepted";

    await booking.save();
  
      
    const property = booking.propertyId;  

    // Send email to the tenant with property details
    await sendApprovalEmail(
      tenantEmail,
      tenantName,
      property.address, 
      property.city,
      property.rentAmount,
      property.propertyType,
      property.locationLink
    );
    
    res.status(200).json({ message: "Booking accepted successfully." });
  } catch (error) {
    console.error("Error accepting booking:", error);
    res.status(500).json({ message: "Server error." });
  }
};

// Reject booking
export const rejectBooking = async (req, res) => {
  try {
    const bookingId = req.params.bookingId;

    const booking = await Booking.findById(bookingId);
    if (!booking) {
      return res.status(404).json({ message: "Booking not found." });
    }
    booking.status = "Rejected";

    await booking.save();
    res.status(200).json({ message: "Booking rejected successfully." });
  } catch (error) {
    console.error("Error rejecting booking:", error);
    res.status(500).json({ message: "Server error." });
  }
};


export const getBookings = async (req, res) => {
    try {
      const bookings = await Booking.find({ requesterId: req.user.userId })
        .populate("ownerId", "userName userEmail") 
        .populate("propertyId", "_id")
        
      // Transform response to include necessary details
      const transformedBookings = bookings.map((booking) => ({
        _id: booking._id,
        owner: {
          userName: booking.ownerId.userName,
          userEmail: booking.ownerId.userEmail,
        },
        propertyId: booking.propertyId._id,
        createdAt: booking.createdAt,
        status: booking.status,
      }));
      res.status(200).json(transformedBookings);
      
    } catch (error) {
      res.status(500).json({ message: "Error fetching bookings", error });
    }
  };
  

export const handleBookingRequest = async (req, res) => {
    const { propertyId, requesterId } = req.body;
  
    try {
      // Fetch the property and verify ownership
      const property = await Property.findById(propertyId).populate("userId");
      if (!property) {
        return res.status(404).json({ message: "Property not found." });
      }
  
      // Prevent booking own property
      if (property.userId._id.toString() === requesterId) {
        return res.status(400).json({ message: "You cannot book your own property." });
      }
  
      // Check if booking request already exists
      const existingBooking = await Booking.findOne({ propertyId, requesterId });
      if (existingBooking) {
        return res.status(400).json({ message: "You have already requested to book this property." });
      }
  
      // Create booking
      const booking = new Booking({
        propertyId,
        requesterId,
        ownerId: property.userId._id,
      });
  
      await booking.save();
      res.status(201).json({ message: "Booking request sent successfully.", booking });
    } catch (error) {
      console.error(error);
      res.status(500).json({ message: "Something went wrong." });
    }
  };
  