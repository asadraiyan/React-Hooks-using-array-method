import React from "react";
import "./CryptoGallery.css";

const CryptoCard = ({ item }) => {
  return (
    <>
      <div className="cards-container">
        <div className="card_image">
          <img src={item.image} alt="img" />
        </div>
        <div className="card_info">
          <h2>{item.name}</h2>
          <h3>${item.current_price}</h3>
        </div>
      </div>
    </>
  );
};

export default CryptoCard;
