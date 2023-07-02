import { createContext, useState } from 'react';
import { getAuth } from 'firebase/auth';
import app from '../firebaseSDK/firebaseSDK';

export const MyContext = createContext(null);

const ContextPassData = ({ children }) => {
  const [user, SetUser] = useState({ userName: 'dulon mahadi' });
  const [customError, setCustomError] = useState(null);

  //firebase providers:
  const suth = getAuth(app);

  //sign up with email and password:
  const signUpEmailPassword = (email, password) => {
    console.log(email, password);
  };

  const contextData = {
    user,
    SetUser,
    customError,
    setCustomError,
    signUpEmailPassword,
  };

  return (
    <MyContext.Provider value={contextData}>{children}</MyContext.Provider>
  );
};

export default ContextPassData;
