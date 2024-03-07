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
                    <input type="radio" id="summer" name="season" value="summer" />
                    <label for="summer">Summer</label>
                </div>
                <div className="radio-container">
                    <input type="radio" id="spring" name="season" value="spring" />
                    <label for="summer">Spring</label>
                </div>
                <div className="radio-container">
                    <input type="radio" id="autumn" name="season" value="autumn" />
                    <label for="summer">Autumn</label>
                </div>
                <div className="radio-container">
                    <input type="radio" id="winter" name="season" value="winter" />
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