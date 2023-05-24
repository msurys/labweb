import React from 'react';
import { useAuth } from '../AuthContext';
import Button from 'react-bootstrap/Button';

function Username() {
  const { user, logout } = useAuth();

  const handleLogout = () => {
    logout();
  };

  return (
    <div>
      {user && (
        <div>
          <span>Welcome, {user.firstName} {user.lastName}!</span>
          <Button variant="primary" onClick={handleLogout}>Logout</Button>
        </div>
      )}
    </div>
  );
}

export default Username;
