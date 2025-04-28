import React from 'react';
import { Link } from 'react-router-dom';

function NotFound() {
  return (
    <div>
      <h1>404 - Page Not Found ❌</h1>
      <p>Oops! The page you're looking for does not exist.</p>
      <Link to="/" style={{ color: 'blue', textDecoration: 'underline' }}>Go back Home</Link>
    </div>
  );
}

export default NotFound;