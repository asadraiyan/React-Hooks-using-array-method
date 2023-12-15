import React, { useState } from "react";
import "./AppData.css";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const Create = () => {
  const [inputData, setInputData] = useState({
    name: "",
    email: "",
    phone: "",
  });

  const navigate = useNavigate();
  const handleChange = (e) => {
    const name = e.target.name;
    const value = e.target.value;

    setInputData({
      ...inputData,
      [name]: value,
    });
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    if (
      inputData.name === "" ||
      inputData.email === "" ||
      inputData.phone === ""
    ) {
      alert("please enter all the required details");
      return;
    }
    axios
      .post("http://localhost:3030/users", inputData)
      .then((res) => {
        alert("Data is added succesfully");
        navigate("/");
      })
      .catch((err) => {
        console.log(err);
      });
  };
  return (
    <>
      <div className="form-container">
        <form className="form-box" onSubmit={handleSubmit}>
          <div className="form-name">
            <label className="label-text">Name</label>
            <input
              type="text"
              name="name"
              onChange={handleChange}
              value={inputData.name || ""}
            />
          </div>
          <div className="form-email">
            <label className="label-text">Email</label>
            <input
              type="text"
              name="email"
              onChange={handleChange}
              value={inputData.email || ""}
            />
          </div>
          <div className="form-phone">
            <label className="label-text">Phone</label>
            <input
              type="number"
              name="phone"
              onChange={handleChange}
              value={inputData.phone || ""}
            />
          </div>
          <div className="submit-btn">
            <button>Submit</button>
          </div>
        </form>
      </div>
    </>
  );
};

export default Create;
