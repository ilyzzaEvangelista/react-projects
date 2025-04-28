import React from 'react';
import { useParams } from 'react-router-dom';

function Project({ isSidebarCollapsed }) {
  const { projectId } = useParams(); // To get the dynamic project ID from the URL

  // Adjust content styles based on the sidebar state (collapsed or not)
  const contentStyles = {
    marginLeft: isSidebarCollapsed ? '80px' : '50px', // Adjust left margin based on the sidebar state
    padding: '1rem',
    transition: 'margin-left 0.3s ease', // Smooth transition for content shift
  };

  return (
    <div style={contentStyles}>
      <h1>Project {projectId} Details</h1>
      <p>Here you can view details about Project {projectId}.</p>
    </div>
  );
}

export default Project;