import React, { useState, useEffect } from 'react';
import { BrowserRouter, Link, Route, Routes } from 'react-router-dom';
import axios from 'axios';
import { AuthProvider } from './AuthContext.js';

import AddNew from './components/AddNew';
import Details from './components/Details';
import Login from './components/Login';
import Search from './components/Search';
import Username from './components/Username';

import './App.css';

function App() {

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get('/data/realEstate.json');
        setRealEstateList(response.data);
      } catch (error) {
        console.error('Error fetching real estate data:', error);
      }
    };

    fetchData();
  }, []);

  const [RealEstateList, setRealEstateList] = useState([]);
  const addNewJSX = <AddNew RealEstateList={RealEstateList} setRealEstateList={setRealEstateList} />;
  


  return (
    <AuthProvider>
      <main>
        <BrowserRouter>
          <nav>
            <div>
              <Link to="/">HOME</Link>
              <Link to="/login">LOG IN</Link>
              <Link to="/addNew">Dodaj nieruchomość</Link>
            </div>
            <Username />
          </nav>
          <Routes>
            <Route path="/" element={<Search RealEstateList={RealEstateList} />} />
            <Route path="/addNew" element={addNewJSX} />
            <Route path="/details" element={<Details />} />
            <Route path="/login" element={<Login />} />
          </Routes>
        </BrowserRouter>
      </main>
    </AuthProvider>
  );
}

export default App;
