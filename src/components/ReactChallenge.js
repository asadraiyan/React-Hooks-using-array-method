import React, { useState } from "react";

const ReactChallenge = () => {
  const countries = [
    {
      name: "India",
      value: "IN",
      cities: ["Delhi, Mumbai"],
    },
    {
      name: "Pakistan",
      value: "PK",
      cities: ["Karachi, Lahore"],
    },
    {
      name: "Australia",
      value: "AUS",
      cities: ["Melbourne, Sydney"],
    },
  ];
  const [country, setCountry] = useState({
    name: "",
    value: "",
    cities: [],
  });

  return (
    <>
      <div>
        <h1>React Challenge</h1>
        <select
          name=""
          id=""
          value={country}
          onChange={(e) => setCountry(e.target.value)}
        >
          {countries.map((item, index) => {
            return (
              <option value={index} key={index}>
                {item.name}
              </option>
            );
          })}
        </select>
        <select value={country}>
          {countries[country]?.cities?.map((item, index) => {
            return (
              <option value={index} key={index}>
                {item}
              </option>
            );
          })}
        </select>
      </div>
    </>
  );
};
export default ReactChallenge;
