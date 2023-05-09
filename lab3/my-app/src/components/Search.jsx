import { useState } from 'react';
import '../styles/Search.css';
import { BrowserRouter, Link, Route, Routes } from 'react-router-dom';

const Search = ({ RealEstateList }) => {
  const [selectedFilter, setSelectedFilter] = useState('city');
  const [query, setQuery] = useState('');
  const [sortOrder, setSortOrder] = useState('default');

  const filteredList = RealEstateList.filter(property => {
    if (selectedFilter === 'city') {
      return property.city.toLowerCase().startsWith(query.toLowerCase());
    } else if (selectedFilter === 'bedrooms') {
      return property.bedrooms.toString().startsWith(query);
    } else if (selectedFilter === 'description') {
      return property.description.toLowerCase().includes(query.toLowerCase());
    } else {
      return true;
    }
  });

  const handleBookingClick = (propertyId) => {

  }

  const handleSelectChange = (event) => {
    setSelectedFilter(event.target.value);
  }

  const handleSortChange = (event) => {
    setSortOrder(event.target.value);
  }

  const sortedList = () => {
    if (sortOrder === 'default') {
      return filteredList;
    } else if (sortOrder === 'ascending') {
      return filteredList.slice().sort((a, b) => a.price - b.price);
    } else if (sortOrder === 'descending') {
      return filteredList.slice().sort((a, b) => b.price - a.price);
    }
  }

  return (
    <div className="search-container">
      <div className="search-bar-container">
        <div>
            <label htmlFor="filter">Kryterium wyszukiwania:</label>
        </div>
        <div>
            <select id="filter" value={selectedFilter} onChange={handleSelectChange}>
                <option value="city">Miasto</option>
                <option value="bedrooms">Liczba pokoi</option>
                <option value="description">Opis</option>
            </select>
        </div>
        <div>
            <input type="text" className="inputClass" placeholder="Wyszukaj" value={query} onChange={(event) => setQuery(event.target.value)} />
        </div>
        <div>
            <label htmlFor="sort">Sortuj:</label>
        </div>
        <div>
        <select id="sort" value={sortOrder} onChange={handleSortChange}>
            <option value="default">Domyślnie</option>
            <option value="ascending">Cena rosnąco</option>
            <option value="descending">Cena malejąco</option>
        </select>
        </div>
      </div>
      <ul className="search-results">
        {sortedList().map((property) => (
          <li key={property.id} className="search-item">
            <h3>{property.city}</h3>
            <p><span>Adres:</span> {property.address}</p>
            <p><span>Liczba pokoi:</span> {property.bedrooms}</p>
            <p><span>Opis:</span> {property.description}</p>
            <p><span>Cena:</span> {property.price} zł</p>
            <Link to={"details"} state={property} className='btn btn-info'>
                Book meeting
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Search;
