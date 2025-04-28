import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';
import { FiChevronLeft, FiChevronRight } from 'react-icons/fi'; // Importing the icons

function Sidebar({ onCollapseToggle }) {
  const [isCollapsed, setIsCollapsed] = useState(true); // State to track whether the sidebar is collapsed
  const projects = [
    { id: 1, name: 'Library', route: '/projects/1' },
    { id: 2, name: 'Dental', route: '/projects/2' },
    { id: 3, name: 'Inventory', route: '/projects/3' },
  ];

  // Toggle the sidebar open/closed and notify parent component
  const toggleSidebar = () => {
    const newState = !isCollapsed;
    setIsCollapsed(newState);
    onCollapseToggle(newState); // Pass the new state to parent
  };

  return (
    <div
      style={{
        width: isCollapsed ? '50px' : '150px', // Sidebar width changes based on state
        padding: '1rem',
        backgroundColor: '#ffffff',
        color: '#000000',
        height: '100vh',
        position: 'fixed',
        transition: 'width 0.3s ease', // Smooth transition for width change
        border: isCollapsed ? ''  : '1px solid rgb(186, 186, 186)', // Corrected border style syntax
      }}
    >
      {/* Toggle Button with Icons */}
      <button
        onClick={toggleSidebar}
        style={{
          backgroundColor: '#ffffff',
          color: '#212121',
          border: 'none',
          padding: '10px',
          cursor: 'pointer',
          marginBottom: '1rem',
          width: '100%',
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
        }}
      >
        {isCollapsed ? (
          <FiChevronRight size={24} /> // Collapse icon
        ) : (
          <FiChevronLeft size={24} /> // Expand icon
        )}
      </button>

      <h2 style={{ display: isCollapsed ? 'none' : 'block' }}>Projects</h2>
      <ul style={{ listStyleType: 'none', paddingLeft: 0 }}>
        {projects.map((project) => (
          <li key={project.id}>
            <NavLink
              to={project.route}
              style={({ isActive }) => ({
                color: isActive ? 'black' : 'grey',
                textDecoration: 'none',
                display: 'block',
                padding: '0.5rem 0',
              })}
            >
              {/* Only show the project name if sidebar is expanded */}
              {isCollapsed ? '' : project.name}
            </NavLink>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default Sidebar;