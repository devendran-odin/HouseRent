import User from "../models/userModal.js";
import Property from "../models/propertyModal.js";

export const addWishlist = async (req, res) => {
    const { userId, propertyId } = req.body;

  try {
    // Find the property
    const property = await Property.findById(propertyId);
    if (!property) {
      return res.status(404).json({ message: 'Property not found' });
    }

    // Find the user and check if the property is already in their wishlist
    const user = await User.findById(userId);
    if (!user) {
      return res.status(404).json({ message: 'Login to add wishlist' });
    }

    if (user.wishlist.includes(propertyId)) {
      return res.status(400).json({ message: 'Property already added to wishlist' });
    }

    // Add the property to the user's wishlist
    user.wishlist.push(propertyId);
    await user.save();

    return res.status(200).json({ message: 'Property added to wishlist', user });
  } catch (error) {
    console.error(error);
    return res.status(500).json({ message: 'Server error' });
  }
}

export const getAllWishlist = async (req, res) => {
    try {
        const userId = req.user.userId; // Extracted from token
    
        const user = await User.findById(userId).populate({
          path: 'wishlist',
          populate: {
            path: 'userId', // Populate owner details
            model: 'User',
            select: 'userName userEmail',
          },
        });
    
        if (!user) {
          return res.status(404).json({ message: 'User not found' });
        }
    
        res.status(200).json(user.wishlist);
      } catch (error) {
        res.status(500).json({ message: 'Server error' });
      }
}




// DELETE wishlist item
export const removeWishlistItem = async (req, res) => {
  const userId = req.user.userId; // User ID extracted from the authentication middleware
  const { propertyId } = req.params; // Property ID passed as a route parameter

  try {
    // Find the user and remove the property from the wishlist array
    const user = await User.findByIdAndUpdate(
      userId,
      { $pull: { wishlist: propertyId } }, // Pull the property ID from the wishlist
      { new: true } // Return the updated user document
    );

    if (!user) {
      return res.status(404).json({ message: "User not found" });
    }

    res.status(200).json({ message: "Property removed from wishlist", wishlist: user.wishlist });
  } catch (error) {
    console.error("Error removing wishlist item:", error);
    res.status(500).json({ message: "Internal server error" });
  }
};
