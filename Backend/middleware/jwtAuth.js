import jwt from 'jsonwebtoken';

// Middleware to verify JWT token
export const authenticateToken = (req, res, next) => {
  const token = req.header("Authorization")?.replace("Bearer ", ""); // Extract the token from the header

  if (!token) {
    return res.status(401).json({ message: "Access denied. No token provided." });
  }

  // Verify the token using the secret key
  jwt.verify(token, process.env.JWT_SECRET_KEY, (err, decoded) => {
    if (err) {
      return res.status(403).json({ message: "Invalid or expired token." });
    }

    // If the token is valid, attach the decoded payload (user info) to the request object
    req.user = decoded; // Decoded token will have user details like userId
    next(); // Continue to the next middleware or route handler
  });
};
