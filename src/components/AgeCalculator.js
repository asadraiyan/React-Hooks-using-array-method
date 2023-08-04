import React, { useState } from "react";

const AgeCalculator = () => {
  const [birthDate, setBirthDate] = useState("");
  const [months, setMonths] = useState(null);
  const [years, setYears] = useState(null);
  const [days, setDays] = useState(null);

  const calculateAge = (birthDate) => {
    const currentDate = new Date();
    const currentBirthDate = new Date(birthDate);
    console.log(birthDate);
    console.log(currentBirthDate);

    if (currentBirthDate > currentDate) {
      setBirthDate("");
      setYears(null);
      setMonths(null);
      setDays(null);
      alert("Invalid date of birth");
      return;
    }

    const diffTime = currentDate - currentBirthDate;

    console.log(diffTime);
    const totalDays = Math.floor(diffTime / (1000 * 60 * 60 * 24));
    console.log(totalDays);
    // setYears(Math.floor(totalDays / 365.25));
    // setMonths(Math.floor((totalDays % 365.25) / 30.4375));
    // setDays(Math.floor((totalDays % 365.25) % 30.4375));
  };

  return (
    <>
      <div
        className="container"
        style={{
          margin: "20px",
          display: "flex",
          gap: "10px",
        }}
      >
        <input
          type="date"
          onChange={(e) => setBirthDate(e.target.value)}
          value={birthDate}
        />
        <button onClick={calculateAge}>Calculate Age</button>
      </div>
      {birthDate && (
        <p>
          Your age is {years} years, {months} months, and {days} days
        </p>
      )}
    </>
  );
};

export default AgeCalculator;
