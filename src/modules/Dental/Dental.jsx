import React from 'react';

function Dental({ isSidebarCollapsed }) {
  const contentStyles = {
    marginLeft: isSidebarCollapsed ? '80px' : '50px',
    padding: '1rem',
    transition: 'margin-left 0.3s ease',
  };

  return (
    <div style={contentStyles}>
      <h1>Dental</h1>
      <p>Here you can view details about Project 2.</p>
    </div>
  );
}

export default Dental;
