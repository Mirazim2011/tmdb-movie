import { createContext, useEffect, useState } from "react";

export const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [isAuthorizated, setIsAuthorizated] = useState(
    JSON.parse(localStorage.getItem("isAuthorizated") ) || false
  );
  useEffect(() => {
    localStorage.setItem("isAuthorizated", isAuthorizated);
  }, [isAuthorizated]);
  return (
    <AuthContext.Provider value={{ isAuthorizated, setIsAuthorizated }}>
      {children}
    </AuthContext.Provider>
  );
};
