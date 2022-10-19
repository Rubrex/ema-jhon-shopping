import React from "react";
import { createContext } from "react";
import {
  createUserWithEmailAndPassword,
  getAuth,
  signInWithEmailAndPassword,
  signOut,
} from "firebase/auth";
import app from "../firebase/firease.config";
import { useState } from "react";

export const AuthContext = createContext();

export const auth = getAuth(app);

const UserContext = ({ children }) => {
  // states
  const [user, setUser] = useState({ displayName: "Arafat Alom" });

  // Register user
  const createUser = (email, password) => {
    return createUserWithEmailAndPassword(auth, email, password);
  };

  // Sign in
  const signIn = (email, password) => {
    return signInWithEmailAndPassword(auth, email, password);
  };

  // Sign out
  const logOut = () => {
    return signOut(auth);
  };

  const authInfo = { user, createUser, signIn, logOut };

  return (
    <div>
      <AuthContext.Provider value={authInfo}>{children}</AuthContext.Provider>
    </div>
  );
};

export default UserContext;
