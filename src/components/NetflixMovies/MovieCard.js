import React from "react";
import "./Movie.css";
import Card from "./Card";
import MovieData from "./Moviedata";

const MovieCard = () => {
  return (
    <>
      <h1 className="heading_style">List Of Top Netflix Series</h1>
      {MovieData.map((item) => {
        return (
          <Card
            key={item.id}
            imgsrc={item.imgscr}
            sname={item.sname}
            title={item.title}
            link={item.link}
          />
        );
      })}
    </>
  );
};

export default MovieCard;
