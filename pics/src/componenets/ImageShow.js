import "../css/ImageShow.css";

function ImageShow({ src, key }) {
  return (
    <div className="col">
      <img src={src}></img>
    </div>
  );
}

export default ImageShow;
