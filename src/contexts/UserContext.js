import React from "react";
import { createContext } from "react";

const UserContext = ({ children }) => {
  const AuthContext = createContext();

  const authInfo = {};

  return (
    <div>
      <AuthContext.Provider value={authInfo}>{children}</AuthContext.Provider>
    </div>
  );
};

export default UserContext;
