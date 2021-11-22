import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import './global.css'
import Logon from './pages/Logon'
import Profile from "./pages/Profile";
import Register from './pages/Register'

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" exact element={<Logon />} />
        <Route path="/register" element={<Register />} />
        <Route path="/profile" element={<Profile />} />
      </Routes>
    </BrowserRouter >

  );
}

export default App;
