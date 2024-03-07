import React from "react";
import "./SearchForm.css";

export default function SearchForm({season, setSeason}) {
    return (
        <form onSubmit={search} className="search-form">
            <div className="search-container">
                <input name="query" />
                <button type="submit" className="button">Search</button>
            </div>
            <div className="radio-input-container">
                <div className="radio-container">
                    <input type="radio" value="summer" checked={season === 'summer'} onChange={(e) => setSeason(e.target.value)} />
                    <label for="summer">Summer</label>
                </div>
                <div className="radio-container">
                    <input type="radio" value="spring" checked={season === 'spring'} onChange={(e) => setSeason(e.target.value)}/>
                    <label for="summer">Spring</label>
                </div>
                <div className="radio-container">
                    <input type="radio" value="autumn" checked={season === 'autumn'} onChange={(e) => setSeason(e.target.value)} />
                    <label for="summer">Autumn</label>
                </div>
                <div className="radio-container">
                    <input type="radio" value="winter" checked={season === 'winter'} onChange={(e) => setSeason(e.target.value)} />
                    <label for="summer">Winter</label>
                </div>
            </div>
        </form>
    );
}

function search(formData) {
    const query = formData.get("query");
    alert(`You searched for '${query}'`);
}