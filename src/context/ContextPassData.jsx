import { createContext, useEffect, useState } from 'react';
import {
  GithubAuthProvider,
  GoogleAuthProvider,
  createUserWithEmailAndPassword,
  getAuth,
  onAuthStateChanged,
  signInWithEmailAndPassword,
  signInWithPopup,
  signOut,
} from 'firebase/auth';
import app from '../firebaseSDK/firebaseSDK';

export const MyContext = createContext(null);

const ContextPassData = ({ children }) => {
  const [user, setUser] = useState(null);
  const [customError, setCustomError] = useState(null);

  //firebase providers:
  const auth = getAuth(app);
  const googleProvider = new GoogleAuthProvider();
  const githubProvider = new GithubAuthProvider();

  //sign up with email and password:
  const signUpEmailPassword = (email, password) => {
    return createUserWithEmailAndPassword(auth, email, password);
  };

  //sign in with email password:
  const loginUser = (email, password) => {
    return signInWithEmailAndPassword(auth, email, password);
  };
  //sign in with google:
  const googleLogin = () => {
    return signInWithPopup(auth, googleProvider);
  };
  //sign in with github:
  const githubLogin = () => {
    return signInWithPopup(auth, githubProvider);
  };

  //sign out user:
  const logOutUser = () => {
    return signOut(auth);
  };

  //user  auth state change:
  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
      if (currentUser) {
        setUser(currentUser);
      } else {
        setUser(null);
      }
    });

    return unsubscribe();
  }, [auth]);

  const contextData = {
    user,
    setUser,
    customError,
    setCustomError,
    signUpEmailPassword,
    loginUser,
    googleLogin,
    githubLogin,
    logOutUser,
  };

  return (
    <MyContext.Provider value={contextData}>{children}</MyContext.Provider>
  );
};

export default ContextPassData;
