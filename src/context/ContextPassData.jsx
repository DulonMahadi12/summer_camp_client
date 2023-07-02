import { createContext, useState } from 'react';

export const MyContext = createContext(null);

const ContextPassData = ({ children }) => {
  const [user, SetUser] = useState({ userName: 'dulon mahadi' });
  const [customError, setCustomError] = useState(null);

  const contextData = { user, SetUser, customError, setCustomError };

  return (
    <MyContext.Provider value={contextData}>{children}</MyContext.Provider>
  );
};

export default ContextPassData;
