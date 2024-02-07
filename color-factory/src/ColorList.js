import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { v4 as uuidv4 } from "uuid";
import validateColor from "validate-color";
import ColorNav from "./ColorNav";
import './ColorList.css'

const ColorList = () => {
  const [colors, setColors] = useState([]);

  useEffect(() => {
    const storedColors = localStorage.getItem("colors");
    if (storedColors) setColors(JSON.parse(storedColors));
  }, []);

  function addColor(color) {
    if (validateColor(color)) {
      setColors((prevColors) => {
        const newColors = [...prevColors, color];
        localStorage.setItem("colors", JSON.stringify(newColors));
        return newColors;
      });
    } else {
      alert("Invalid color");
    }
  }

  return (
    <div>
      <ColorNav addColor={addColor} />

      <ul className="color-list">
        {colors.map((color) => {
          return (
            <li key={uuidv4()} >
              <Link to={`/colors/${color}`} className="list-item">{color}</Link>
            </li>
          );
        })}
      </ul>
    </div>
  );
};

export default ColorList;
