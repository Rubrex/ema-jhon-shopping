import React from "react";
import { createContext } from "react";
import { getAuth } from "firebase/auth";
import app from "../firebase/firease.config";
import { useState } from "react";

const auth = getAuth(app);

const UserContext = ({ children }) => {
  // states
  const [user, setUser] = useState(null);

  const AuthContext = createContext();

  const authInfo = {};

  return (
    <div>
      <AuthContext.Provider value={authInfo}>{children}</AuthContext.Provider>
    </div>
  );
};

export default UserContext;
