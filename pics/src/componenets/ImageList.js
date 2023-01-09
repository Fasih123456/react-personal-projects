import { useState } from "react";
import ImageShow from "./ImageShow";

function ImageList({ data }) {
  const [searchResult, setSearchResult] = useState("");

  const renderResult = () => {
    let array = [];
    for (let i = 0; i < data.length; i++) {
      array.push(<ImageShow src={data[i].urls.raw} key={i} />);
    }

    console.log(array);
    return array;
  };

  return (
    <div className="container">
      {console.log(data[0])}

      <div className="row">{renderResult()}</div>
    </div>
  );
}

export default ImageList;
