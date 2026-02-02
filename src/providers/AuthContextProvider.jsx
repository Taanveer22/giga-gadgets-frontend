import { createContext, useEffect, useState } from "react";
import {
  GithubAuthProvider,
  GoogleAuthProvider,
  createUserWithEmailAndPassword,
  onAuthStateChanged,
  signInWithEmailAndPassword,
  signInWithPopup,
  signOut,
  updateProfile,
} from "firebase/auth";
import auth from "../firebase/firebase.config";

// create a context
const AuthContext = createContext(null);

// fireBase provider
const googleProvider = new GoogleAuthProvider();
const githubProvider = new GithubAuthProvider();

const AuthContextProvider = ({ children }) => {
  const [user, setUser] = useState({});
  const [loading, setLoading] = useState(true);

  // google sign in
  const googleSignIn = () => {
    setLoading(true);
    return signInWithPopup(auth, googleProvider);
  };
  // github sign in
  const githubSignIn = () => {
    setLoading(true);
    return signInWithPopup(auth, githubProvider);
  };

  //  register user with email password
  const registerUser = (email, password) => {
    setLoading(true);
    return createUserWithEmailAndPassword(auth, email, password);
  };

  //  sign in user with email password
  const signInUser = (email, password) => {
    setLoading(true);
    return signInWithEmailAndPassword(auth, email, password);
  };

  // sign out user
  const signOutUser = () => {
    setLoading(true);
    return signOut(auth);
  };

  // update profile
  const updateUserProfile = (obj) => {
    setLoading(true);
    // return updateProfile(auth.currentUser, obj)
    return updateProfile(auth.currentUser, obj);
  };

  // use observer to check user state
  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
      console.log("check user state...");
      console.log(user);
      setLoading(false);
      setUser(currentUser);
    });

    return () => {
      unsubscribe();
    };
  }, []);

  // context data
  const authInfo = {
    googleSignIn,
    registerUser,
    signInUser,
    signOutUser,
    updateUserProfile,
    githubSignIn,
    loading,
    setLoading,
    user,
  };

  return (
    <AuthContext.Provider value={authInfo}>{children}</AuthContext.Provider>
  );
};

export { AuthContext };
export default AuthContextProvider;
