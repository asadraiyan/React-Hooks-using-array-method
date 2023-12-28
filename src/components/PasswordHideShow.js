import React, { useState } from "react";
import { IoIosEyeOff } from "react-icons/io";
import { IoIosEye } from "react-icons/io";

export const PasswordHideShow = () => {
  const [hide, setHide] = useState(true);
  const [inputType, setInputType] = useState("password");

  const handleOff = () => {
    setInputType("text");
    setHide(false);
  };
  const handleOnn = () => {
    setInputType("password");
    setHide(true);
  };
  return (
    <>
      <div className="password-container">
        <h1>Show & Hide Password</h1>
        <div className="pass-box">
          <input type={inputType} placeholder="Enter your password" />
          {hide ? (
            <IoIosEyeOff className="off" onClick={handleOff} />
          ) : (
            <IoIosEye className="off" onClick={handleOnn} />
          )}
        </div>
      </div>
    </>
  );
};
