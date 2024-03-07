import React from "react";
import "./SearchForm.css";

export default function SearchForm({ selectedSeasons, handleCheckboxChange }) {
    return (
        <form onSubmit={search} className="search-form">
            <div className="search-container">
                <input name="query" />
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

function search(formData) {
    const query = formData.get("query");
    alert(`You searched for '${query}'`);
}