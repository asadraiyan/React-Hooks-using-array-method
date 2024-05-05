import React, { useState } from "react";

const PasswordGen = () => {
  const [input, setInput] = useState("MhsSR#q8Py");

  const upperCase = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
  const lowerCase = "abcdefghijklmnopqrstuvwxyz";
  const numbers = "0123456789";
  const specialChar = "!'^+%&/()=?_#$½§{[]}|;:>÷`<.*-@é";
  let characterList = "";

  const handleGenerate = () => {
    if (input) {
      characterList += upperCase + lowerCase + numbers + specialChar;
    }
    setInput(createPassword(characterList));
    // console.log(characterList);
    // console.log(characterList.length);
  };

  const createPassword = (characterList) => {
    let password = "";
    for (let i = 0; i < 10; i++) {
      const characterIndex = Math.round(Math.random() * characterList.length);
      console.log(characterIndex);
      password += characterList.charAt(characterIndex);
      console.log(password);
    }
    return password;
  };

  return (
    <div>
      <h1>Password Generator</h1>
      <input
        type="text"
        onChange={(e) => setInput(e.target.value)}
        value={input}
        readOnly
      />
      <button onClick={handleGenerate}>Generate</button>
    </div>
  );
};

export default PasswordGen;
