import React from "react";
import { useState } from "react";

const InputForm = () => {
  const [formData, setFormData] = useState({
    userName: "",
    email: "",
    phoneNumber: "",
    password: "",
  });
  const [errorMessage, setErrorMessage] = useState();
  const [submit, setSubmit] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setErrorMessage(validate(formData));
  };

  const handleChange = (e) => {
    console.log("e.target =", e.target);
    const name = e.target.name;
    const value = e.target.value;
    setFormData({
      ...formData,
      [name]: value,
    });
    console.log("formdata", formData);
  };

  const validate = (values) => {
    let errors = {};
    let strongPassword = new RegExp(
      "^(?=.*[0-9])(?=.*[a-z])(?=.*[A-Z])(?=.*\\W)(?!.* ).{8,16}$"
    );
    if (values.userName === "") {
      errors.userName = "Username is required";
      return errors;
    }
    if (values.userName?.length > 15 || values.userName?.length <= 3) {
      errors.userName =
        "Username must have atleast 3 characters and cannot exceed more than 15 characters";
      return errors;
    }
    if (values.email === "") {
      errors.email = "Email is required";
      return errors;
    }
    if (values.phoneNumber === "") {
      errors.phoneNumber = "Phone number is required";
      return errors;
    }
    if (values.password === "") {
      errors.password = "Password is required";
      return errors;
    }
    if (!strongPassword.test(values.password)) {
      errors.password =
        "Must have minimum eight characters, at least one uppercase letter, one lowercase letter, one number and one special character";
      return errors;
    }
    setFormData("");
    setErrorMessage({});
    setSubmit(true);
  };
  console.log("errorMessage", errorMessage);
  return (
    <>
      <h2 style={{ textAlign: "center" }}>Login Form</h2>
      <form
        style={{
          display: "flex",
          flexDirection: "column",
          width: "250px",
          margin: "auto",
          gap: "3px",
        }}
        onSubmit={handleSubmit}
      >
        <label>User name</label>
        <input
          type="text"
          value={formData.userName || ""}
          name="userName"
          onChange={handleChange}
        />
        <span>{errorMessage?.userName}</span>
        <label>E-mail</label>
        <input
          type="email"
          value={formData.email || ""}
          name="email"
          onChange={handleChange}
        />
        <span>{errorMessage?.email}</span>
        <label>Phone number</label>
        <input
          type="text"
          value={formData.phoneNumber || ""}
          name="phoneNumber"
          onChange={handleChange}
        />
        <span>{errorMessage?.phoneNumber}</span>
        <label>Password</label>
        <input
          type="password"
          value={formData.password || ""}
          name="password"
          onChange={handleChange}
        />
        <span>{errorMessage?.password}</span>
        <button style={{ width: "100px", marginTop: "10px" }}>Submit</button>
        {submit && <h3>Form is submitted successfully</h3>}
      </form>
    </>
  );
};

export default InputForm;

// S24171O6N2604241200060
