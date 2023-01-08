import cow from "../assets/svg/cow.svg";
import bird from "../assets/svg/bird.svg";
import cat from "../assets/svg/cat.svg";
import dog from "../assets/svg/dog.svg";
import gator from "../assets/svg/gator.svg";
import heart from "../assets/svg/heart.svg";
import horse from "../assets/svg/horse.svg";
import "../assets/css/animal.css";

import { useState } from "react";

const svgMap = {
  bird,
  cow,
  cat,
  dog,
  gator,
  horse,
};

function AnimalShow({ type, key }) {
  const [clicks, setClicks] = useState(0);

  const handleClick = () => {
    setClicks(clicks + 1);
  };

  return (
    <div onClick={handleClick} className="animal-show">
      <img alt={type} className="animal" src={svgMap[type]} />
      <img alt="heart" className="heart" src={heart} style={{ width: 10 + 10 * clicks + "px" }} />
    </div>
  );
}

export default AnimalShow;
