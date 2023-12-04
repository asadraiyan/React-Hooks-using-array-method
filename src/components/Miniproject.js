import React from "react";

const Miniproject = () => {
  let cssStyle = {};
  let greetings = "";
  let currDate = new Date(2023, 1, 2, 18);
  currDate = currDate.getHours();
  if (currDate >= 1 && currDate <= 11) {
    greetings = "Good Morning";
    cssStyle.color = "green";
  } else if (currDate >= 12 && currDate <= 16) {
    greetings = "Good Afternoon";
    cssStyle.color = "yellow";
  } else if (currDate >= 17 && currDate <= 20) {
    greetings = "Good evening";
    cssStyle.color = "orange";
  } else {
    greetings = "Good Night";
    cssStyle.color = "blue";
  }
  return (
    <>
      <div className="box">
        <h1>
          Hello Asad,<span style={cssStyle}> {greetings}</span>
        </h1>
      </div>
    </>
  );
};

export default Miniproject;
