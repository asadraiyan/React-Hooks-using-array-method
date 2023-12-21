import React, { useState } from "react";
import userContext from "./UserContext";
import Login from "./Login";
import Profile from "./Profile";

const UserContextProvider = () => {
  const [user, setUser] = useState(null);
  return (
    <userContext.Provider value={{ user, setUser }}>
      <Login />
      <Profile />
    </userContext.Provider>
  );
};

export default UserContextProvider;
