import React, { useState } from "react";
import "./Accord.css";
import { IoIosArrowDown } from "react-icons/io";
import { IoIosArrowUp } from "react-icons/io";

import { questions } from "./Questions";

const Accordion = () => {
  const [data, setData] = useState(questions);

  const handleToggle = (id) => {
    setData((prevData) =>
      prevData.map((item) =>
        item.id === id ? { ...item, show: !item.show } : item
      )
    );
  };

  return (
    <>
      <div className="main_container">
        <div className="container">
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
                  {item.show ? <IoIosArrowUp /> : <IoIosArrowDown />}
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
