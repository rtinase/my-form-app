import './App.css';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import SearchForm from './myComponents/SearchForm';
import Gallery from './myComponents/Gallery';
import React, { useState } from 'react';

export default function App() {
  const [season, setSeason] = useState('spring');
  return (
    <div>
      <SearchForm season={season} setSeason={setSeason} />
      <Gallery season={season} />
    </div>
  );
}




