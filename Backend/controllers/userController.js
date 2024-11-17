import User from "../models/userModal.js";
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
        // Find user by email
        const user = await User.findOne({ userEmail });

        if (!user) {
            return res.status(400).json({ message: "Invalid email or password" });
        }

        // Check if the password matches
        const isMatch = await user.matchPassword(userPassword);

        if (!isMatch) {
            return res.status(400).json({ message: "Invalid email or password" });
        }

        // If password matches, create a token (JWT)
        const token = jwt.sign({ userId: user._id }, process.env.JWT_SECRET_KEY, { expiresIn: '24h' });

        res.status(200).json({ message: "Login successful", userId: user._id, token });
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



