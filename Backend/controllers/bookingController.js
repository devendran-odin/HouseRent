import Booking from "../models/bookingModal.js"
import Property from "../models/propertyModal.js"

export const getBookings = async (req, res) => {
    try {
      const bookings = await Booking.find({ requesterId: req.user.userId })
        .populate("ownerId", "userName userEmail") // Populate owner's name and email
        .populate("propertyId", "_id"); // Include property ID
        
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
  