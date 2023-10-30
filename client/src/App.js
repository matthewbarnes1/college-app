import './App.css';
import React from 'react';
import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import Profile from "./pages/Profile";
import AccountSettings from "./pages/AccountSettings";
import Homepage from "./pages/Homepage";
import Layout from "./Layouts/Layout"
import ClubCorner from './pages/ClubCorner';
import Login from './pages/Login';

//* Integrate react router for navigation and user routing to different pages
// * https://www.w3schools.com/react/react_router.asp


function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="*" element={<Layout />} />
          <Route path="/" element={<Homepage />} />
          <Route path="/Login" element={<Login />} />
          <Route path="/ClubCorner" element={<ClubCorner />} />
          <Route path="/Profile" element={<Profile />} />
          <Route path="/AccountSettings" element={<AccountSettings />} />
      </Routes>
    </BrowserRouter>
  );
}
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<App />);

export default App;
