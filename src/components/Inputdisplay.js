import React, { useState } from "react";

const Inputdisplay = () => {
  const [input, setInput] = useState("");
  const [items, setItems] = useState([]);
  const [edit, setEdit] = useState(false);
  const [editInput, setEditInput] = useState("");
  const [editId, setEditId] = useState(null);

  const handleChange = (e) => {
    setInput(e.target.value);
  };

  const handleClick = () => {
    if (input === "") {
      return;
    }
    setItems((oldItems) => [...oldItems, input]);
    setInput("");
  };

  const deleteHandler = (id) => {
    setItems((oldItems) => oldItems.filter((_, index) => index !== id));
  };

  const editHandler = (id) => {
    setEdit(true);
    setEditInput(items[id]);
    setEditId(id);
  };

  const handleEditSubmit = () => {
    setItems((oldItems) =>
      oldItems.map((item, index) => (index === editId ? editInput : item))
    );
    setEdit(false);
    setEditInput("");
    setEditId(null);
  };

  return (
    <>
      <div className="container" style={{ margin: "10px" }}>
        <input
          type="text"
          autoComplete="off"
          value={input}
          onChange={handleChange}
          placeholder="Enter your text"
          onKeyDown={(event) => (event.key === "Enter" ? handleClick() : null)}
        />
        <button style={{ marginLeft: "10px" }} onClick={handleClick}>
          Submit
        </button>

        <ol style={{ display: "flex", flexDirection: "column" }}>
          {items.map((curValue, id) => (
            <div
              className="item-container"
              style={{ display: "flex", flexDirection: "row" }}
              key={id}
            >
              {edit && editId === id ? (
                <>
                  <input
                    type="text"
                    onChange={(e) => setEditInput(e.target.value)}
                    value={editInput}
                  />
                  <button
                    style={{ marginLeft: "10px", marginTop: "5px" }}
                    onClick={handleEditSubmit}
                  >
                    Save
                  </button>
                </>
              ) : (
                <>
                  <li>{curValue}</li>
                  <button
                    style={{ marginLeft: "10px", marginTop: "5px" }}
                    onClick={() => editHandler(id)}
                  >
                    Edit
                  </button>
                  <button
                    style={{ marginLeft: "10px", marginTop: "5px" }}
                    onClick={() => deleteHandler(id)}
                  >
                    Delete
                  </button>
                </>
              )}
            </div>
          ))}
        </ol>
      </div>
    </>
  );
};

export default Inputdisplay;
