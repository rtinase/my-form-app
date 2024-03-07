import React from "react";
import "./SearchForm.css";

export default function SearchForm(){
    return(
      <form onSubmit={search}>
        <input name="query"/>
        <button type="submit">Search</button>
        <input type="radio" id="summer" name="season" value="summer"/>
        <label for="summer">Summer</label>
  
        <input type="radio" id="autumn" name="season" value="autumn"/>
        <label for="autumn">Autumn</label>
  
        <input type="radio" id="winter" name="season" value="winter"/>
        <label for="winter">Winter</label>
  
        <input type="radio" id="spring" name="season" value="spring"/>
        <label for="spring">Spring</label>
      </form>
    );
  }

  function search(formData) {
    const query = formData.get("query");
    alert(`You searched for '${query}'`);
  }