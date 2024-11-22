import mongoose from "mongoose";
import bcrypt from 'bcryptjs'; 

// user schema
const userSchema = new mongoose.Schema({
    userName: {
      type: String,
      required: [true, 'Username is required'],  // Validation message
      trim: true 
    },
    userEmail: {
      type: String,
      required: [true, 'Email is required'],  // Validation message
      unique: true, 
      trim: true 
    },
    userPassword: {
      type: String,
      required: [true, 'Password is required'],  // Validation message
    },
    wishlist: [
      {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Property',
        unique: true, // Prevents duplicate properties in the wishlist
      },
    ],
  });


// Method to check if password matches
userSchema.methods.matchPassword = async function(enteredPassword) {
    return await bcrypt.compare(enteredPassword, this.userPassword);
};

// Creating the model
const User = mongoose.model("User", userSchema);

export default User;
