import React, { useContext } from "react";
import userContext from "./UserContext";

const Profile = () => {
  const { user } = useContext(userContext);
  return (
    <>
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        {user ? (
          <div>
            <h3>Welcome {user.userName}</h3>
          </div>
        ) : (
          <div>
            <h3>Please Login</h3>
          </div>
        )}
      </div>
    </>
  );
};

export default Profile;
