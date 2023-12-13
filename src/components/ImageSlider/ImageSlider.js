import React, { useEffect, useState } from "react";
import { imageData } from "./ImageData";

const ImageSlider = () => {
  const [image, setImage] = useState(0);

  const handlePrevious = () => {
    if (image === 0) {
      setImage(imageData.length - 1);
    } else {
      setImage(image - 1);
    }
  };
  const handleNext = () => {
    if (image === imageData.length - 1) {
      setImage(0);
    } else {
      setImage(image + 1);
    }
  };

  useEffect(() => {
    const timer = setTimeout(() => {
      handleNext();
    }, 3000);
    return () => {
      clearTimeout(timer);
    };
  }, [image]);
  return (
    <>
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
        }}
      >
        <h1>The Image Slider</h1>
        <div
          style={{
            display: "flex",
            flexDirection: "row",
            gap: "1rem",
            alignItems: "center",
          }}
        >
          <button style={{ padding: "5px" }} onClick={handlePrevious}>
            Previous
          </button>
          {imageData.map((imgUrl, index) => {
            if (image === index) {
              return (
                <img
                  src={imgUrl}
                  key={imgUrl}
                  alt="img"
                  style={{
                    width: "600px",
                    height: "500px",
                    objectFit: "contain",
                  }}
                />
              );
            }
            return null;
          })}
          <button style={{ padding: "5px" }} onClick={handleNext}>
            Next
          </button>
        </div>
      </div>
    </>
  );
};

export default ImageSlider;
