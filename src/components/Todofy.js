import React, { useState } from "react";
import "./todofy.css";
import { RiArrowDropDownLine } from "react-icons/ri";
const Todofy = () => {
  const [todo, setTodo] = useState([]);
  const [input, setInput] = useState("");
  const [isActive, setIsActive] = useState(false);
  const [show, setShow] = useState(false);
  const [selected, setSelected] = useState("Choose One");
  const options = ["Facebook", "Instagram", "Whatsapp", "Twitter", "Linkedin"];

  const handleChange = (e) => {
    setInput(e.target.value);
  };

  const handleAdd = () => {
    if (input === "") {
      return;
    }
    setTodo((oldItems) => {
      return [...oldItems, input];
    });
    setInput("");
  };

  // useEffect(() => {
  //   console.log("clicked");
  //   return () => {
  //     console.log("unmount");
  //   };
  // }, [todo]);

  const handleDelete = (id) => {
    setTodo((oldItems) => {
      return oldItems.filter((curItem, index) => {
        return index !== id;
      });
    });
  };

  return (
    <>
      <div>
        <h1>Todo List</h1>
        <input
          type="text"
          placeholder="Add a Item"
          onChange={handleChange}
          value={input}
        />
        <button onClick={handleAdd}>Add</button>
        <ol style={{ display: "flex", flexDirection: "column", gap: "10px" }}>
          {todo.map((currentValue, id) => {
            return (
              <>
                <div style={{ display: "flex", flexDirection: "row" }}>
                  <li>{currentValue}</li>
                  <button
                    style={{ marginLeft: "10px" }}
                    onClick={() => handleDelete(id)}
                  >
                    X
                  </button>
                </div>
              </>
            );
          })}
        </ol>
        <div className="dropdown-container">
          <div className="custom-dropdown">
            <button
              className="dropdown-button"
              onClick={() => {
                setIsActive(!isActive);
              }}
            >
              {selected}
            </button>
            <RiArrowDropDownLine
              className="icon"
              onClick={() => {
                setIsActive(!isActive);
              }}
              style={{
                transform: `rotate(${!isActive ? 0 : 180}deg)`,
                transition: "all 0.25s",
              }}
            />
            {isActive && (
              <div className="dropdown-content" id="dropdownContent">
                {options.map((option) => {
                  return (
                    <button
                      onClick={(e) => {
                        setSelected(e.target.textContent);
                        setIsActive(false);
                        setShow(!show);
                      }}
                    >
                      {option}
                    </button>
                  );
                })}
              </div>
            )}
          </div>
        </div>
        {show && <p>The choosen social media app is {selected}</p>}
      </div>
    </>
  );
};

export default Todofy;
