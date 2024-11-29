import User from "../models/userModal.js";
import Booking from "../models/bookingModal.js";
import Property from "../models/propertyModal.js"
import bcrypt from 'bcryptjs';
import jwt from 'jsonwebtoken';


export const signup = async (req, res) => {
    const { username, useremail, password } = req.body;
  
    // Basic validation
    if (!username || !useremail || !password) {
      return res.status(400).send("All fields are required.");
    }
  
    try {
      // Check if user already exists
      const existingUser = await User.findOne({ userEmail: useremail });
      if (existingUser) {
        return res.status(400).send("User already exists with this email.");
      }

      // Hash the password
      const hashedPassword = await bcrypt.hash(password, 10); 
  
      const user = new User({    
            userName: username.charAt(0).toUpperCase() + username.slice(1).toLowerCase(), 
            userEmail: useremail, 
            userPassword: hashedPassword 
         });
      await user.save();
      res.status(200).send("User registered successfully!");
    } catch (err) {
      console.error("Error registering user:", err.message); 
      res.status(500).send("Error registering user.");
    }
};


export const login = async (req, res) => {
  const { userEmail, userPassword } = req.body;

  try {
      // Check if the user is trying to log in as an admin
      if (userEmail === process.env.ADMIN_EMAIL && userPassword === process.env.ADMIN_PASSWORD) {
          // Admin credentials matched
          const token = jwt.sign(
              { userId: 'admin', role: 'admin' }, // Hardcode admin ID and role
              process.env.JWT_SECRET_KEY,
              { expiresIn: '24h' }
          );

          return res.status(200).json({
              message: "Admin login successful",
              userId: 'admin',  // Admin ID
              role: 'admin',    // Admin role
              token
          });
      }

      // If not admin, proceed with normal user login
      const user = await User.findOne({ userEmail });
      if (!user) {
          return res.status(400).json({ message: "Invalid email or password" });
      }

      // Check if the password matches
      const isMatch = await user.matchPassword(userPassword);
      if (!isMatch) {
          return res.status(400).json({ message: "Invalid email or password" });
      }

      // If user is authenticated, create a token and return user details
      const token = jwt.sign(
          { userId: user._id, role: 'user' },
          process.env.JWT_SECRET_KEY,
          { expiresIn: '24h' }
      );

      res.status(200).json({
          message: "Login successful",
          userId: user._id,
          role: 'user',  // User role
          token
      });
  } catch (err) {
      console.error(err);
      res.status(500).json({ message: "Server error" });
  }
};

export const getUser = async (req, res) => {
    try {
    // Extract userId from the decoded token (JWT)
    const userId = req.user.userId; 

    // Find user by the userId decoded from the token
    const user = await User.findById(userId); 

    if (!user) {
      return res.status(404).json({ message: "User not found." });
    }

    // Send back the user data (without password for security)
    res.json({
      userName: user.userName,
      userEmail: user.userEmail,
      // Add any other fields you want to return
    });
  } catch (err) {
    console.error("Error fetching user data", err);
    res.status(500).json({ message: "Server error" });
  }
};



export const getAllUser = async (req, res) => {
  try {
    const users = await User.find().select("-userPassword"); // Exclude password
    res.status(200).json(users);
  } catch (error) {
    res.status(500).json({ message: "Failed to fetch users", error });
  }
}


export const getOwnerCount = async(req, res) => {
  try {
    const uniqueOwners = await Property.distinct('userId');
    res.json({ totalOwners: uniqueOwners.length });

  } catch (error) {
    res.status(500).json({ message: 'Error fetching total owners', error });
  }

}


export const getUserCount = async (req, res) => {
  try {
    const totalUsers = await User.countDocuments();
    res.json({ totalUsers });
  } catch (error) {
    res.status(500).json({ message: 'Error fetching total users', error });
  }
}

 
export const deleteUserById = async (req, res) => {
  const { userId } = req.params;
  try {
    await Booking.deleteMany({
      $or: [{ ownerId: userId }, { requesterId: userId }],
    });
    await Property.deleteMany({ userId });
    await User.findByIdAndDelete(userId);

    res.status(200).json({ message: "User and related records deleted successfully." });
  } catch (error) {
    console.error("Error deleting user and related records:", error);
    res.status(500).json({ message: "Failed to delete user and related records." });
  }
}