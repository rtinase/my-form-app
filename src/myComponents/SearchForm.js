import React, { useState } from "react";
import "./SearchForm.css";

export default function SearchForm({ selectedSeasons, handleCheckboxChange, handleSearch }) {
    const [query, setQuery] = useState('');

    const onSubmit = (event) => {
        event.preventDefault();
        handleSearch(query);
    };

    const handleInputChange = (event) => {
        setQuery(event.target.value);
    };

    return (
        <form onSubmit={onSubmit} className="search-form">
            <div className="search-container">
                <input name="query" value={query} onChange={handleInputChange} />
                <button type="submit" className="button">Search</button>
            </div>
            <div className="radio-input-container">
                {Object.keys(selectedSeasons).map((season) => (
                    <label key={season}>
                        <input
                            type="checkbox"
                            name={season}
                            checked={selectedSeasons[season]}
                            onChange={handleCheckboxChange}
                        />
                        {season.charAt(0).toUpperCase() + season.slice(1)}
                    </label>
                ))}
            </div>
        </form>
    );
}