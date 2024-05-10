import {
  createUserWithEmailAndPassword,
  getAuth,
  onAuthStateChanged,
  signInWithEmailAndPassword,
  signInWithPopup,
  signOut,
  updateProfile,
} from "firebase/auth";
import React, { createContext, useEffect, useState } from "react";
import { app } from "../firebase.config";

import { GoogleAuthProvider } from "firebase/auth";

export const AuthContextValue = createContext();

const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);
  /* auth */

  const auth = getAuth(app);

  /* google auth provider */
  const provider = new GoogleAuthProvider();
  //const googleProvider= new GoogleAuthProvider()
  /* create a user */
  const createUser = (email, password) => {
    setLoading(true);
    return createUserWithEmailAndPassword(auth, email, password);
  };
  /* loign a user   email and password */

  const loginUser = (email, password) => {
    setLoading(true);
    return signInWithEmailAndPassword(auth, email, password);
  };

  /* OnAUTH STATE */
  useEffect(() => {
    const unSubscribe = onAuthStateChanged(auth, (currentUser) => {
      setUser(currentUser);
      setLoading(false);
    });

    return () => {
      return unSubscribe();
    };
  }, []);
  /* google login */
  const googleLogin = () => {
    setLoading(true);
    return signInWithPopup(auth, provider);
  };
  /* update profile */

  // const updateProfiles = (name, photo) => {
  //   setLoading(true);
  //   return updateProfile(
  //     auth.currentUser,

  //     setUser({ ...user, displayName: name, photoURL: photo })
  //   );
  // };
/* update propile */
const updateProfiles=(name,photo)=>{
  setLoading(true)
    return updateProfile(auth.currentUser, 
     // displayName: name, photoURL:photo
     setUser({...user, displayName: name, photoURL:photo})
      // Profile updated!
      // ...
    ).catch((error) => {
      // An error occurred
      // ...
    });
  
  }


  /* loagout a user */
  const logOut = () => {
    setLoading(true);
    return signOut(auth);
  };

  /* all auth info inforamtion */
  const AuthInfo = {
    user,
    setUser,
    loading,
    createUser,
    loginUser,
    logOut,
    googleLogin,
    updateProfiles,
    setLoading
  };

  return (
    <div>
      <AuthContextValue.Provider value={AuthInfo}>
        {children}
      </AuthContextValue.Provider>
    </div>
  );
};

export default AuthProvider;
