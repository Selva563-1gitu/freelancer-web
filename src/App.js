import React, { useState } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Sidebar from "./components/Sidebar";
import Home from "./pages/Home";
import Profile from "./pages/Profile";
import Jobs from "./pages/Jobs";
import Settings from "./pages/Settings";
import Login from "./components/auth/Login";
import Register from "./components/auth/Register";
// import Chat from './components/Chat';
import ProtectedRoute from "./ProtectedRoute";
import { CssBaseline, Box, Toolbar } from "@mui/material";

const App = () => {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [currentUser,setCurrentUser] = useState({});
  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen);
  };


  return (
    <Router>
      <Box sx={{ display: "flex" }}>
        <CssBaseline />
        <Sidebar
          handleDrawerToggle={handleDrawerToggle}
          mobileOpen={mobileOpen}
        />
        <Box component="main" sx={{ flexGrow: 1, p: 3 }}>
          <Toolbar />
          <Routes>
            <Route path="/freelancer-web/" element={<Home />} />
            <Route path="/freelancer-web/profile" element={<Profile currentUser={currentUser}/>} />
            <Route path="/freelancer-web/jobs" element={<Jobs />} />
            <Route path="/freelancer-web/settings" element={<Settings />} />
            <Route path="/freelancer-web/login" element={<Login />} />
            <Route path="/freelancer-web/register" element={<Register setCurrentUser={setCurrentUser}/>} />
            {/* <Route path="/chat" element={<Chat />} /> */}
          </Routes>
        </Box>
      </Box>
    </Router>
  );
};

export default App;
