import React, { useState } from 'react';
import { BrowserRouter, Link, Route, Routes } from 'react-router-dom';

import AddNew from './components/AddNew';
import Search from './components/Search';

import './App.css';

function App() {
  const RealEstateListDefault = [
    {
      id: 1,
      city: 'Kraków',
      address: 'ul. Długa 15',
      bedrooms: 2,
      description: 'Nowe mieszkanie w centrum miasta',
      price: 350000,
      seller : "Jan Kowalski",
      phone : "123456789",
      email : "jan.kowalski@o2.pl",
    },
    {
      id: 2,
      city: 'Warszawa',
      address: 'ul. Szeroka 10',
      bedrooms: 3,
      description: 'Duże mieszkanie blisko parku',
      price: 450000,
      seller : "Jan Nowak",
      phone : "987654321",
      email : "jan.nowak@gmail.com",
    },
    {
      id: 3,
      city: 'Gdańsk',
      address: 'ul. Krótka 7',
      bedrooms: 1,
      description: 'Mieszkanie w kamienicy przy rynku',
      price: 250000,
      seller : "Anna Kowalska",
      phone : "123356789",
      email : "anna@o2.pl",
    },
    {
      id: 4,
      city: 'Wrocław',
      address: 'ul. Wąska 1',
      bedrooms: 2,
      description: 'Mieszkanie z widokiem na rzekę',
      price: 320000,
      seller : "Grzegorz Brzęczyszczykiewicz",
      phone : "123456179",
      email : "grzegorz@gmail.com",
    },
    {
      id: 5,
      city: 'Kraków',
      address: 'ul. Ogrodowa 5',
      bedrooms: 1,
      description: 'Mieszkanie w pobliżu starego miasta',
      price: 220000,
      seller : "Jan Kowalski",
      phone : "123456789",
      email : "jan.kowalski@o2.pl",
    },
  ];

  const [RealEstateList, setRealEstateList] = useState(RealEstateListDefault);
  const addNewJSX = <AddNew RealEstateList={RealEstateList} setRealEstateList={setRealEstateList} />;

  return(
    
    <main>
      <BrowserRouter>
      <nav>
        <Link to="/">HOME</Link>
        <Link to="/addNew">Dodaj nieruchomość</Link>
      </nav>
      <Routes>
        <Route path="/" element={ <Search RealEstateList={RealEstateList}/> }/>
        <Route path="/addNew" element={ addNewJSX }/>
      </Routes>
      </BrowserRouter>
    </main>
  );
};


export default App;
