import React from "react";
import "./filter.css";

const Filters = ({ filters, handleOnChange }) => {
  return (
    <section className="form">
      <div className="label-input">
        <label htmlFor="pages">number of pages {filters.pages}</label>
        <input
          name="pages"
          id="pages"
          type="range"
          value={filters.pages}
          onChange={handleOnChange}
          min="0"
          max="2000"
        />
      </div>
      <div className="label-input">
        <label htmlFor="genre">filter by genre</label>
        <select name="genre" value={filters.genre} onChange={handleOnChange} id="genre">
          <option value="All">All</option>
          <option value="Terror">Terror</option>
          <option value="Zombies">Zombies</option>
        </select>
      </div>
    </section>
  );
};

export default Filters;
