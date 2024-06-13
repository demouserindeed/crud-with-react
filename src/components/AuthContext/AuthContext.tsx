import { createContext, useState } from 'react';
import { AuthenticationContextType } from '../../types/types';

type AuthContextParam = {
  children: React.ReactNode;
};

export const AuthenticationContext = createContext<
  AuthenticationContextType | undefined
>(undefined);

const AuthContext = ({ children }: AuthContextParam) => {
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  return (
    <AuthenticationContext.Provider
      value={{ isAuthenticated, setIsAuthenticated }}
    >
      {children}
    </AuthenticationContext.Provider>
  );
};
export default AuthContext;
