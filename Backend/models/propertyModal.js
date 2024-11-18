import mongoose from 'mongoose';

const propertySchema = new mongoose.Schema({
  userId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'User', // Reference to User model
    required: true,
  },
  address: {
    type: String,
    required: true,
    trim: true,
  },
  city: {
    type: String,
    required: true,
    trim: true,
  },
  rentAmount: {
    type: Number,
    required: true,
  },
  propertyType: {
    type: String,
    required: true,
    enum: ['1RK', '1BHK', '2BHK', '3BHK', '4BHK'], // Supported types
  },
  description: {
    type: String,
    required: true,
  },
  locationLink: {
    type: String, // Optional location link
  },
  postedDate: {
    type: Date,
    required: true,
  },
  image: {
    type: String, // Cloudinary URL or similar
    required: true,
  },
});

// Creating the Property model
const Property = mongoose.model('Property', propertySchema);

export default Property;
