import React, { useEffect, useState } from "react";
import "./style.css";

const RandomColorGen = () => {
  const [boxes, setBoxes] = useState(new Array(9).fill(""));
  const [color, setColor] = useState("");

  const handleRandom = () => {
    let chars = "0123456789abcdef";
    let colorLength = 6;
    let color = "#";
    for (let i = 0; i < colorLength; i++) {
      let randomColor = Math.floor(Math.random() * chars.length);
      color += chars.substring(randomColor, randomColor + 1);
    }
    console.log(color);
    setBoxes(new Array(9).fill(color));
    setColor(color);
  };
  useEffect(() => {
    handleRandom();
  }, []);

  return (
    <>
      <div className="container">
        <h1>Random Color Palette Generator</h1>
        <button onClick={handleRandom}>Generate Random Color</button>
        <div className="section">
          {boxes?.map((item, index) => {
            return (
              <div
                key={index}
                className="boxes"
                style={{ backgroundColor: color }}
              >
                {item}
              </div>
            );
          })}
        </div>
      </div>
    </>
  );
};

export default RandomColorGen;
