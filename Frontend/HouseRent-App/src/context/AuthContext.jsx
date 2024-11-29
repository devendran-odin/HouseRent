import { createContext, useContext, useState, useEffect } from "react";

// Create Context
const AuthContext = createContext();

// Provide Context
export const AuthProvider = ({ children }) => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [userId, setUserId] = useState(null); // Store `user_id`

  useEffect(() => {
    const token = localStorage.getItem("authToken");
    const storedUserId = localStorage.getItem("userId");
    setIsLoggedIn(!!token);
    if (storedUserId) setUserId(storedUserId);
  }, []);

  const logout = () => {
    localStorage.removeItem("authToken");
    localStorage.removeItem("userId");
    localStorage.removeItem("userRole");
    setIsLoggedIn(false);
    setUserId(null);
  };

  return (
    <AuthContext.Provider
      value={{ isLoggedIn, setIsLoggedIn, userId, setUserId, logout }}
    >
      {children}
    </AuthContext.Provider>
  );
};

// Custom Hook to Access Context
export const useAuth = () => {
  return useContext(AuthContext);
};
