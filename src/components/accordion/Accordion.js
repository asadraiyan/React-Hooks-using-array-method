import React, { useState } from "react";
import "./Accord.css";
import { IoIosArrowDown } from "react-icons/io";
import { IoIosArrowUp } from "react-icons/io";

import { questions } from "./Questions";
import { useEffect } from "react";

const Accordion = () => {
  const [data, setData] = useState(questions);
  const [mode, setMode] = useState("Dark Mode");
  const [theme, setTheme] = useState("light-theme");

  const handleToggle = (id) => {
    setData((prevData) =>
      prevData.map((item) =>
        item.id === id ? { ...item, show: !item.show } : item
      )
    );
  };
  const handleMode = () => {
    // theme === "dark-theme" ? setTheme("light-theme") : setTheme("dark-theme");
    if (theme === "dark-theme") {
      setTheme("light-theme");
      setMode("Dark Mode");
    } else {
      setTheme("dark-theme");
      setMode("Light Mode");
    }
  };
  useEffect(() => {
    document.body.className = theme;
  }, [theme]);
  return (
    <>
      <div className="main_container">
        <div className="container">
          <div className="btn">
            <button className="btn-bg" onClick={handleMode}>
              {mode}
            </button>
          </div>
          <div className="heading">
            <h2>FAQ</h2>
          </div>
          <div className="accordion_wrapper">
            {data.map((item) => (
              <div className="accordion_block" key={item.id}>
                <div
                  className="accord_box"
                  onClick={() => handleToggle(item.id)}
                >
                  <h3>{item.question}</h3>
                  {item.show ? (
                    <IoIosArrowUp className="icon" />
                  ) : (
                    <IoIosArrowDown className="icon" />
                  )}
                </div>
                {item.show && (
                  <div className="content">
                    <p>{item.answer}</p>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
};

export default Accordion;
