import SearchBar from "./componenets/SearchBar";
import ImageList from "./componenets/ImageList";
import API from "./api";
import "./css/App.css";
import searchImage from "./api";
import { useState } from "react";

function App() {
  const [searchResult, setSearchResult] = useState("");

  const handleSubmit = async (term) => {
    const response = await searchImage(term);
    setSearchResult(response);
    console.log(response);
  };

  return (
    <div>
      <SearchBar onSubmit={handleSubmit} />
      <ImageList data={searchResult} />
    </div>
  );
}

export default App;
