import { ComponentType, useContext, useEffect } from 'react';
import { AuthenticationContext } from '../AuthContext/AuthContext';
import { useNavigate } from 'react-router-dom';

const WithAuthHoc = <P extends object>(WrappedComponent: ComponentType<P>) => {
  const AuthWrapper: React.FC<P> = (props) => {
    const authData = useContext(AuthenticationContext);
    const navigate = useNavigate();

    useEffect(() => {
      if (!authData?.isAuthenticated) {
        navigate('/crud-with-react');
      }
    }, []);

    return authData?.isAuthenticated && <WrappedComponent {...props} />;
  };

  return AuthWrapper;
};

export default WithAuthHoc;
