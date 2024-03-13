import './App.css';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import SearchForm from './myComponents/SearchForm';
import Gallery from './myComponents/Gallery';
import React, { useState } from 'react';

export default function App() {
  const [selectedSeasons, setSelectedSeasons] = useState({
    spring: false,
    summer: false,
    autumn: false,
    winter: false,
  });
  const [searchQuery, setSearchQuery] = useState('');

  const handleCheckboxChange = (event) => {
    setSelectedSeasons({
      ...selectedSeasons,
      [event.target.name]: event.target.checked,
    });
  };
  const handleSearch = (query) => {
    setSearchQuery(query);
  };

  return (
    <div>
      <SearchForm selectedSeasons={selectedSeasons} handleCheckboxChange={handleCheckboxChange} handleSearch={handleSearch} />
      <Gallery selectedSeasons={selectedSeasons} searchQuery={searchQuery} />
    </div>
  );
}




