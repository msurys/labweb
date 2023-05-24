import React, { createContext, useContext, useState } from 'react';
import LocalStorage from './components/LocalStorage.jsx';

const AuthContext = createContext();

export const useAuth = () => useContext(AuthContext);

export const AuthProvider = ({ children }) => {
  const [user, setUser] = LocalStorage('user', null);

  const login = (email, password) => {
    const users = [
      { id: 1, firstName: 'Mateusz', lastName: 'Surys', email: 'ms@example.com', password: 'password1' },
      { id: 2, firstName: 'Tomasz', lastName: 'Szandala', email: 'ts@example.com', password: 'password2' },
      { id: 3, firstName: 'Piotr', lastName: 'Patronik', email: 'pepe@example.com', password: 'password3' }
    ];

    const authenticatedUser = users.find(user => user.email === email && user.password === password);

    if (authenticatedUser) {
      setUser(authenticatedUser);
    } else {
      setUser(null);
    }
    
    return(authenticatedUser)
  };

  const logout = () => {
    setUser(null);
  };

  return (
    <AuthContext.Provider value={{ user, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
};

export default AuthContext;
