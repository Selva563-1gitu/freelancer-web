import React, { useState } from 'react';
import './SidebarSimple.css'; // Import the CSS file

const Sidebar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleSidebar = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className={`sidebar ${isOpen ? 'open' : ''}`}>
      <button className="toggle-btn" onClick={toggleSidebar}>
        {isOpen ? 'Close' : 'Open'} Sidebar
      </button>
      <div className="sidebar-content">
        <h2>Menu</h2>
        <ul>
          <li><a href="#home">Home</a></li>
          <li><a href="#profile">Profile</a></li>
          <li><a href="#jobs">Jobs</a></li>
          <li><a href="#settings">Settings</a></li>
        </ul>
      </div>
    </div>
  );
};

export default Sidebar;
