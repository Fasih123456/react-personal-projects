import axios from "axios";
import { useState } from "react";
import "../css/SearchBar.css";

function SearchBar({ onSubmit }) {
  const [term, setTerm] = useState("Car");

  const handleClick = () => {
    onSubmit(term);
  };

  const handleChange = () => {
    setTerm(document.getElementById("query-result").value);
  };

  return (
    <div className="container">
      <div className="row">
        <div className="col">
          <input
            type="text"
            className="form-control"
            placeholder="Enter Query"
            aria-label="Enter Query"
            id="query-result"
            value={term}
            onChange={handleChange}
          ></input>
        </div>
        <div className="col">
          <button onClick={handleClick}>Click Me</button>
        </div>
      </div>
    </div>
  );
}

export default SearchBar;
