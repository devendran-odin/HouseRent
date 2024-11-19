import { useRef, useEffect } from "react";
import { BrowserRouter, Routes, Route, useLocation } from "react-router-dom";
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

function App() {
  const location = useLocation();

  useEffect(() => {
    // If on the main page ("/") and the user has visited other routes before
    if (location.pathname === "/" && sessionStorage.getItem("visited")) {
      window.location.reload();
      sessionStorage.removeItem("visited"); // Remove the flag after reloading
    } else if (location.pathname !== "/") {
      // Set "visited" flag when visiting any other route
      sessionStorage.setItem("visited", "true");
    }
  }, [location.pathname]);

  const stepsRef = useRef(null);

  const scrollToSteps = () => {
    stepsRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <>
      <Navbar scrollToSteps={scrollToSteps} />
      <Routes>
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
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<SignUp />} />
        <Route path="/properties" element={<Properties />} />
        <Route path="/view/:id" element={<ViewProperty />} />
        <Route path="/profile" element={<UserProfile />} />
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
