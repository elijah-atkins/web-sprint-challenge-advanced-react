import React, { useState, useEffect } from "react";
import { useForm } from "../hooks/useForm";

const Search = ({ plants }) => {
  const [seachResults, setSearchResults] = useState([]);
  const initialValue = {
    search: "",
  };

  const [
    values,
    handleChanges,
    clearForm,
    handleSubmit,
    showSuccessMessage,
  ] = useForm(initialValue, "searches");

  useEffect(() => {
    const newResults = plants.filter((project) => {
      const str = Object.values(project).join(" ").toLowerCase();

      return str.match(values.search.toLowerCase());
    });

    setSearchResults(newResults);
    console.log(seachResults);
  }, [values.search, plants]);

  return (
    <div className="plant-search">
      <form onSubmit={handleSubmit}>
        <label htmlFor="name">Search:</label>
        <input
          id="name"
          type="text"
          name="search"
          placeholder="Search"
          value={values.search}
          onChange={handleChanges}
        />
      </form>
    </div>
  );
};
export default Search;
