import React from "react";
import { createContext } from "react";
import { getAuth } from "firebase/auth";
import app from "../firebase/firease.config";
import { useState } from "react";

export const AuthContext = createContext();

const auth = getAuth(app);

const UserContext = ({ children }) => {
  // states
  const [user, setUser] = useState(null);

  const myUser = { displayName: "Arafat Alom" };

  const authInfo = { myUser };

  return (
    <div>
      <AuthContext.Provider value={authInfo}>{children}</AuthContext.Provider>
    </div>
  );
};

export default UserContext;
