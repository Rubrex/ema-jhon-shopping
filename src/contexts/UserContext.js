import React from "react";
import { createContext } from "react";
import {
  createUserWithEmailAndPassword,
  getAuth,
  onAuthStateChanged,
  signInWithEmailAndPassword,
  signOut,
} from "firebase/auth";
import app from "../firebase/firease.config";
import { useState } from "react";
import { useEffect } from "react";
import { toast } from "react-toastify";

export const AuthContext = createContext();

export const auth = getAuth(app);

const UserContext = ({ children }) => {
  // states
  const [user, setUser] = useState();

  const [loading, setLoading] = useState(true);

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

  // onAuthStateChanged sideEffect
  useEffect(() => {
    const unSubscribe = onAuthStateChanged(auth, (currentUser) => {
      toast.info(`authStateChanged inside useEffect`);
      setUser(currentUser);
      setLoading(false);
    });

    // SideEffect Cleanup
    return () => {
      unSubscribe();
    };
  }, []);

  const authInfo = { user, loading, createUser, signIn, logOut };

  return (
    <div>
      <AuthContext.Provider value={authInfo}>{children}</AuthContext.Provider>
    </div>
  );
};

export default UserContext;
