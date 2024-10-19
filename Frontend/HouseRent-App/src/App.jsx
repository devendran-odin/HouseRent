import HeroSection from "./HeroSection.jsx";
import Login from "./Login.jsx";
import Navbar from "./Navbar.jsx";
import Properties from "./Properties.jsx";
import SignUp from "./SignUp.jsx";
import UserProfile from "./UserProfile.jsx";
import { BrowserRouter, Routes, Route } from "react-router-dom";

function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path="/" element={<HeroSection />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<SignUp />} />
        <Route path="/properties" element={<Properties />} />
        <Route path="/profile" element={<UserProfile />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
