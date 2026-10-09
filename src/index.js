import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";

import "@fortawesome/fontawesome-free/css/all.min.css";
import "assets/styles/tailwind.css";
import "assets/styles/interactions.css";

// Initialize i18n
import "./i18n";

// layouts

import Admin from "layouts/Admin.js";
import Auth from "layouts/Auth.js";

// views without layouts

import Landing from "views/Landing.js";
import Feature from "views/Feature.js";
import Download from "views/Download.js";
import Profile from "views/Profile.js";
import Index from "views/Index.js";
import Subscription from "views/Subscription.js";
import PrivacyPolicy from "views/PrivacyPolicy.js";
import TermsOfUse from "views/TermsOfUse.js";
import SafetyTips from "views/SafetyTips.js";

ReactDOM.render(
  <BrowserRouter>
    <Routes>
      {/* add routes with layouts */}
      <Route path="/admin/*" element={<Admin />} />
      <Route path="/auth/*" element={<Auth />} />
      {/* add routes without layouts */}
      <Route path="/landing" element={<Landing />} />
      <Route path="/features" element={<Feature />} />
      <Route path="/download" element={<Download />} />
      <Route path="/subscription" element={<Subscription />} />
      <Route path="/profile" element={<Profile />} />
      <Route path="/privacy-policy" element={<PrivacyPolicy />} />
      <Route path="/terms-of-use" element={<TermsOfUse />} />
      <Route path="/safety-tips" element={<SafetyTips />} />
      <Route path="/" element={<Index />} />
      {/* add redirect for first page */}
      <Route path="*" element={<Navigate to="/" replace />} />
    </Routes>
  </BrowserRouter>,
  document.getElementById("root")
);
