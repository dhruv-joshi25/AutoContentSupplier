import React from 'react';
import { useNavigate } from 'react-router-dom';

const Logout = () => {
  const navigate = useNavigate();

  const handleLogout = () => {
    // Perform any logout actions (e.g., clear session, tokens, etc.)

    // Redirect to the login page
    navigate('./LoginPage');
  };

  return (
    <div>
      <p>Are you sure you want to logout?</p>
      <button onClick={handleLogout}>Logout</button>
    </div>
  );
};

export default Logout;
