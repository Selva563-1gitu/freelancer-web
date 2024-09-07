import React from "react";
import {
  Drawer,
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
  Toolbar,
  AppBar,
  Typography,
  IconButton,
} from "@mui/material";
import HomeIcon from "@mui/icons-material/Home";
import PersonIcon from "@mui/icons-material/Person";
import WorkIcon from "@mui/icons-material/Work";
import SettingsIcon from "@mui/icons-material/Settings";
import MenuIcon from "@mui/icons-material/Menu";
import { useEffect } from "react";
import {Link} from 'react-router-dom';
import "./SidebarSimple.css"; // Import the CSS file
const drawerWidth = 240;

const Sidebar = ({ handleDrawerToggle, mobileOpen }) => {
  return (
    <>
      {/* AppBar for Top Navigation */}
      <AppBar
        sx={{
          width: { md: `calc(100% - ${drawerWidth}px)` },     
        }}
      >
        <Toolbar>
          <IconButton
            edge="start"
            color="inherit"
            aria-label="menu"
            onClick={handleDrawerToggle}
            sx={{ display: { md: "none" } }}
          >
            <MenuIcon />
          </IconButton>
          <Typography variant="h6" noWrap component="div">
            Freelancer Platform
          </Typography>
        </Toolbar>
      </AppBar>

      {/* Drawer (Sidebar) */}
      <Drawer
        variant="temporary"
        open={mobileOpen}
        onClose={handleDrawerToggle}
        ModalProps={{
          keepMounted: true, // Better open performance on mobile
        }}
        sx={{
          display: { sm: "block", md: "none" },
          "& .MuiDrawer-paper": { boxSizing: "border-box", width: drawerWidth },
        }}
      >
        <div className="sidebar">
        <div className="sidebar-content">
            <h2>Menu</h2>
            <ul>
              <li>
                <Link to="/">Home</Link>
              </li>
              <li>
              <Link to="/profile">Profile</Link>

              </li>
              <li>
              <Link to="/jobs">Jobs</Link>

              </li>
              <li>
              <Link to="/settings">Settings</Link>

              </li>
              <li>
              <Link to="/register">Register</Link>

              </li>
              
            </ul>
          </div></div>
      </Drawer>

      <Drawer
        variant="permanent"
        sx={{
          display: { xs:"none",sm: "none", md: "block" },
          "& .MuiDrawer-paper": { boxSizing: "border-box", width: drawerWidth }
        }}
        open
      >
        <div className="sidebar">
        <div className="sidebar-content">
            <h2>Menu</h2>
            <ul>
            <li>
                <Link to="/">Home</Link>
              </li>
              <li>
              <Link to="/profile">Profile</Link>

              </li>
              <li>
              <Link to="/jobs">Jobs</Link>

              </li>
              <li>
              <Link to="/settings">Settings</Link>

              </li>
              <li>
              <Link to="/register">Register</Link>

              </li>
            </ul>
          </div></div>
      </Drawer>
    </>
  );
};

export default Sidebar;
