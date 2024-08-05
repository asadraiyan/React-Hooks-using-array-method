import React from "react";
import "./style.css";
import { useState } from "react";

const emptyIcon =
  "https://icons.veryicon.com/png/128/miscellaneous/colouring-icon/star-empty-6.png";
const halfFilledIcon =
  "https://icons.veryicon.com/png/128/education-technology/education-background/half-filled-rating-star.png";
const filledIcon =
  "https://icons.veryicon.com/png/128/miscellaneous/icons-1/218-star-full.png";

const value = 0;
const steps = 1;

const StarRating = () => {
  const [starRating, setStarRating] = useState(emptyIcon);
  const [starHover, setStarHover] = useState({
    isHover: false,
    index: null,
  });
  // Utility function to calculate if the mouse event happened on the left side of the target or the right side.

  const isLessThanHalf = (event) => {
    const { target } = event;
    const boundingClientRect = target.getBoundingClientRect();
    let mouseAt = event.clientX - boundingClientRect.left;
    mouseAt = Math.round(Math.abs(mouseAt));
    return mouseAt <= boundingClientRect.width / 2;
  };
  const handleEnterStar = (e, index) => {
    setStarHover({
      isHover: true,
      index,
    });
    if (steps === 0.5 && isLessThanHalf(e)) {
      setStarRating(halfFilledIcon);
    } else {
      setStarRating(filledIcon);
    }
  };

  const handleLeaveStar = () => {
    setStarHover({
      isHover: false,
      index: null,
    });
  };

  return (
    <>
      <div className="container">
        {[...Array(5)].map((item, index) => {
          return (
            <img
              src={
                value > index
                  ? filledIcon
                  : starHover.isHover && starHover.index >= index
                  ? starHover.index === index
                    ? starRating
                    : filledIcon
                  : emptyIcon
              }
              alt="Rate"
              onMouseEnter={(e) => handleEnterStar(e, index)}
              onMouseLeave={handleLeaveStar}
            />
          );
        })}
      </div>
    </>
  );
};

export default StarRating;
