import { ComponentType } from 'react';
import { Navigate } from 'react-router-dom';
import useHelperHook from '../../CustomHooks/useHelperHook';

const WithAuthHoc = <P extends object>(WrappedComponent: ComponentType<P>) => {
  return (props: P) => {
    const { loginStatus } = useHelperHook();

    if (!loginStatus) {
      return <Navigate to="/crud-with-react" replace />;
    }

    return loginStatus && <WrappedComponent {...props} />;
  };
};

export default WithAuthHoc;
