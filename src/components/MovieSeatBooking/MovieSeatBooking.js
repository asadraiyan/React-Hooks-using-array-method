import React, { useState } from "react";
import { data } from "./Data";
import "./style.css";

const MovieSeatBooking = () => {
  const [seats, setSeats] = useState([...data]);
  const [select, setSelect] = useState(10);
  const [price, setPrice] = useState(0);
  const [seatSelect, setSeatSelect] = useState(0);

  const handleClick = (seat) => {
    const updatedSeats = seats.map((item) => {
      if (item.id === seat.id) {
        return {
          id: item.id,
          isSelected: !item.isSelected,
        };
      } else return item;
    });
    setSeats([...updatedSeats]);
    setPrice(
      seat.isSelected ? select * (seatSelect - 1) : select * (seatSelect + 1)
    );
    setSeatSelect((prev) => (seat.isSelected ? prev - 1 : prev + 1));
  };

  return (
    <>
      <div className="movie_container">
        <div className="container">
          <div className="pick_movie">
            <label>Pick a movie: </label>
            <select
              name="movie"
              onChange={(e) => setSelect(Number(e.target.value))}
              value={select}
            >
              <option value="10">KGF ($10)</option>
              <option value="12">Sultan ($12)</option>
              <option value="9">War ($9)</option>
              <option value="11">Pathan ($11)</option>
              <option value="8">Tiger ($8)</option>
            </select>
          </div>
          <ul className="showcase">
            <li>
              <div className="seat"></div>
              <small>N/A</small>
            </li>
            <li>
              <div className="seat selected"></div>
              <small>Selected</small>
            </li>
            <li>
              <div className="seat occupied"></div>
              <small>Occupied</small>
            </li>
          </ul>
          <div className="theatre">
            <div className="screen"></div>
            <div className="row">
              <div className="column1">
                {seats.slice(0, 12).map((item) => {
                  return (
                    <button
                      key={item.id}
                      className={`seat ${item.isOccupied ? "occupied" : ""} ${
                        item.isSelected ? "selected" : ""
                      }`}
                      onClick={() => handleClick(item)}
                      disabled={item.isOccupied ? true : false}
                    ></button>
                  );
                })}
              </div>
              <div className="column2">
                {seats.slice(12, 36).map((item) => {
                  return (
                    <button
                      key={item.id}
                      className={`seat ${item.isOccupied ? "occupied" : ""} ${
                        item.isSelected ? "selected" : ""
                      }`}
                      onClick={() => handleClick(item)}
                      disabled={item.isOccupied ? true : false}
                    ></button>
                  );
                })}
              </div>
              <div className="column3">
                {seats.slice(36, 48).map((item) => {
                  return (
                    <button
                      key={item.id}
                      className={`seat ${item.isOccupied ? "occupied" : ""} ${
                        item.isSelected ? "selected" : ""
                      }`}
                      onClick={() => handleClick(item)}
                      disabled={item.isOccupied ? true : false}
                    ></button>
                  );
                })}
              </div>
            </div>
          </div>
          <div>
            <p className="text">
              You have selected <span>{seatSelect} </span>seats for a price of
              <span> ${price}</span>
            </p>
          </div>
        </div>
      </div>
    </>
  );
};

export default MovieSeatBooking;
