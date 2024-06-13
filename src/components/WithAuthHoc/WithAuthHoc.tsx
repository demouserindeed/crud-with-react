import { ComponentType, useContext } from 'react';
import { AuthenticationContext } from '../AuthContext/AuthContext';
import { Navigate } from 'react-router-dom';

const WithAuthHoc = <P extends object>(WrappedComponent: ComponentType<P>) => {
  return (props: P) => {
    const authData = useContext(AuthenticationContext);

    if (!authData?.isAuthenticated) {
      return <Navigate to="/crud-with-react" replace />;
    }

    return authData?.isAuthenticated && <WrappedComponent {...props} />;
  };
};

export default WithAuthHoc;
