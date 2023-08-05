import React, { useState } from "react";

const AgeCalculator = () => {
  const [birthDate, setBirthDate] = useState("");
  const [months, setMonths] = useState(null);
  const [years, setYears] = useState(null);
  const [days, setDays] = useState(null);
  const [show, setShow] = useState(false);

  const calculateAge = () => {
    if (birthDate === "") {
      return alert("Enter your D.O.B");
    }
    const currentDate = new Date();
    const currentBirthDate = new Date(birthDate);
    // console.log(birthDate);
    // console.log(currentBirthDate);

    if (currentBirthDate > currentDate) {
      setBirthDate("");
      setYears(null);
      setMonths(null);
      setDays(null);
      alert("Invalid D.O.B");
      setShow(false);
      return;
    }

    const diffTime = currentDate - currentBirthDate;
    console.log(diffTime);
    const totalDays = Math.floor(diffTime / (1000 * 60 * 60 * 24));
    console.log(totalDays);
    setYears(Math.floor(totalDays / 365.25));
    setMonths(Math.floor((totalDays % 365.25) / 30.4375));
    setDays(Math.floor((totalDays % 365.25) % 30.4375));
    setShow(true);
  };

  return (
    <>
      <h2 style={{ margin: "20px", textAlign: "center" }}>Enter your D.O.B</h2>
      <div
        className="container"
        style={{
          margin: "20px",
          display: "flex",
          justifyContent: "center",
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
      {show ? (
        <p style={{ textAlign: "center" }}>
          Your age is {years} years, {months} months, and {days} days
        </p>
      ) : (
        ""
      )}
    </>
  );
};

export default AgeCalculator;
