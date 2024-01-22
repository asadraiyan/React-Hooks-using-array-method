import React, { useState } from "react";
import "./Accord.css";
import { IoIosArrowDown } from "react-icons/io";
import { questions } from "./Questions";
const Accordion = () => {
  const [show, setShow] = useState(false);
  const [data, setData] = useState(questions);
  return (
    <>
      <div className="main_container">
        <div className="container">
          <div className="heading">
            <h2>FAQ</h2>
          </div>
          <div className="accordion_wrapper">
            {data.map((item) => {
              return (
                <div className="accordion_block" key={item.id}>
                  <div className="accord_box" onClick={() => setShow(!show)}>
                    <h3>{item.question}</h3>
                    <IoIosArrowDown />
                  </div>
                  {show && (
                    <div className="content">
                      <p>{item.answer}</p>
                    </div>
                  )}
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </>
  );
};

export default Accordion;
