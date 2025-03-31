import { useRef, useEffect, useState } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { AuthProvider } from "./context/AuthContext.jsx";
import Footers from "./Components/Footers.jsx";
import HeroSection from "./Components/HeroSection.jsx";
import Login from "./Pages/Login.jsx";
import Navbar from "./Components/Navbar.jsx";
import Properties from "./Pages/Properties.jsx";
import SignUp from "./Pages/SignUp.jsx";
import FAQ from "./Components/FAQ.jsx";
import ViewProperty from "./Pages/ViewProperty.jsx";
import Steps from "./Components/Steps.jsx";
import Error from "./Pages/Error.jsx";
import UserProfile from "./Pages/UserProfile.jsx";
import Stackedcards from "./Components/Stackedcards.jsx";
import Enquire from "./Components/Enquire.jsx";
import AdminDashboard from "./Pages/AdminDashboard.jsx";

function App() {
  const stepsRef = useRef(null);

  const scrollToSteps = () => {
    stepsRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  const [userRole, setUserRole] = useState(null);

  useEffect(() => {
    fetch(`${import.meta.env.VITE_BACKEND_URL}/api/ping`, {
      mode: "no-cors",
    }).catch((err) => console.error("Warm-up request failed", err));
    const role = localStorage.getItem("userRole");
    setUserRole(role);
  }, []);

  return (
    <>
      <Navbar scrollToSteps={scrollToSteps} />
      <Routes>
        {/* Public Route */}
        <Route
          path="/"
          element={
            <>
              <HeroSection />
              <Enquire />
              <Stackedcards />
              <Steps ref={stepsRef} />
              <FAQ />
              <Footers />
            </>
          }
        />
        {/* Auth Routes */}
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<SignUp />} />

        <Route path="/view/:id" element={<ViewProperty />} />
        <Route path="/properties" element={<Properties />} />

        {/* User Routes */}
        {userRole === "user" && (
          <>
            <Route path="/profile" element={<UserProfile />} />
          </>
        )}

        {/* Admin Routes */}
        {userRole === "admin" && (
          <Route path="/admin" element={<AdminDashboard />} />
        )}

        {/* 404 Error Route */}
        <Route path="*" element={<Error />} />
      </Routes>
    </>
  );
}

function WrappedApp() {
  return (
    <AuthProvider>
      <BrowserRouter>
        <App />
      </BrowserRouter>
    </AuthProvider>
  );
}

export default WrappedApp;
