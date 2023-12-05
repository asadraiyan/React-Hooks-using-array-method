import React, { useState } from "react";

const Todofy = () => {
  const [todo, setTodo] = useState([]);
  const [input, setInput] = useState("");

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
      </div>
    </>
  );
};

export default Todofy;
