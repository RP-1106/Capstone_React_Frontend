import React, { useState } from "react";
import { Route, Routes, useNavigate } from "react-router-dom";

import LandingPage from "./landing-pages/landing";
import AboutUs from "./landing-pages/aboutus";
import Features from "./landing-pages/features";
import Novelty from "./landing-pages/novelty";
import HandyTools from "./landing-pages/handytools";
import LoginPage from "./landing-pages/login";

import HomePage from "./main-pages/home";
import GettingStartedPage from "./main-pages/gettingstarted";
import IncomePage from "./main-pages/income";
import ExpensePage from "./main-pages/expense";
import PerformancePage from "./main-pages/performance";
import BotPage from "./main-pages/bot";
import AnalysisPage from "./main-pages/analysis";
import EducationalPage from "./main-pages/educational";
import SettingsPage from "./main-pages/settings";

import LandingNavigation from "./components/landingnavigation";
import Navigation from "./components/navigation";
import ProtectedRoute from "./components/protectedroute"; // Import ProtectedRoute

function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const navigate = useNavigate();

  const handleLogin = () => {
    setIsLoggedIn(true);
    navigate("/home");
  };

  const handleLogout = () => {
    setIsLoggedIn(false);
    navigate("/");
  };

  return (
    <div>
      {isLoggedIn ? <Navigation onLogout={handleLogout} /> : <LandingNavigation />}

      <Routes>
        {/* Public Landing Pages */}
        <Route path="/" element={<LandingPage />} />
        <Route path="/aboutus" element={<AboutUs />} />
        <Route path="/features" element={<Features />} />
        <Route path="/novelty" element={<Novelty />} />
        <Route path="/handytools" element={<HandyTools />} />
        <Route path="/login" element={<LoginPage onLogin={handleLogin} />} />

        {/* Protected Routes */}
        <Route
          path="/home"
          element={<ProtectedRoute isLoggedIn={isLoggedIn}><HomePage /></ProtectedRoute>}
        />
        <Route
          path="/gettingstarted"
          element={<ProtectedRoute isLoggedIn={isLoggedIn}><GettingStartedPage /></ProtectedRoute>}
        />
        <Route
          path="/income"
          element={<ProtectedRoute isLoggedIn={isLoggedIn}><IncomePage /></ProtectedRoute>}
        />
        <Route
          path="/expense"
          element={<ProtectedRoute isLoggedIn={isLoggedIn}><ExpensePage /></ProtectedRoute>}
        />
        <Route
          path="/performance"
          element={<ProtectedRoute isLoggedIn={isLoggedIn}><PerformancePage /></ProtectedRoute>}
        />
        <Route
          path="/bot"
          element={<ProtectedRoute isLoggedIn={isLoggedIn}><BotPage /></ProtectedRoute>}
        />
        <Route
          path="/analysis"
          element={<ProtectedRoute isLoggedIn={isLoggedIn}><AnalysisPage /></ProtectedRoute>}
        />
        <Route
          path="/education"
          element={<ProtectedRoute isLoggedIn={isLoggedIn}><EducationalPage /></ProtectedRoute>}
        />
        <Route
          path="/settings"
          element={<ProtectedRoute isLoggedIn={isLoggedIn}><SettingsPage /></ProtectedRoute>}
        />
      </Routes>
    </div>
  );
}

export default App;
