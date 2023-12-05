import React, { useEffect, useState } from "react";

const Inputdisplay = () => {
  const [input, setInput] = useState("");
  const [item, setItem] = useState(
    JSON.parse(localStorage.getItem("input")) || []
  );
  const handleChange = (e) => {
    setInput(e.target.value);
  };
  const handleClick = () => {
    if (input === "") {
      return;
    }
    setItem((oldItem) => {
      console.log(oldItem);
      return [...oldItem, input];
    });
    setInput("");
  };
  const deleteHandler = (id) => {
    setItem((oldItem) => {
      return oldItem.filter((curelem, index) => {
        return index !== id;
      });
    });
  };

  useEffect(() => {
    const saveLocalInput = () => {
      localStorage.setItem("input", JSON.stringify(item));
    };
    saveLocalInput();
  }, [item]);

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
          {item?.map((curValue, id) => {
            return (
              <>
                <div
                  className="item-container"
                  style={{ display: "flex", flexDirection: "row" }}
                  key={id}
                >
                  <li key={id}>{curValue}</li>
                  <button
                    style={{ marginLeft: "10px", marginTop: "5px" }}
                    onClick={() => deleteHandler(id)}
                  >
                    Delete
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

export default Inputdisplay;
