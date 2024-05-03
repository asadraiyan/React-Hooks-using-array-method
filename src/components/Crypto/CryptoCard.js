import React from "react";
import "./CryptoGallery.css";
import { Link } from "react-router-dom";

const CryptoCard = ({ item }) => {
  return (
    <>
      <div className="cards-container">
        <Link>
          <div className="card_image">
            <img src={item.image} alt="img" />
          </div>
          <div className="card_info">
            <h2>{item.name}</h2>
            <h3>${item.current_price}</h3>
          </div>
        </Link>
      </div>
    </>
  );
};

export default CryptoCard;
