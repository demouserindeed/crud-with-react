import { ReducerAction } from '../../../types/types';

const LoginReducer = (state = false, action: ReducerAction) => {
  switch (action.type) {
    case 'login':
      return true;
    case 'logout':
      return false;

    default:
      return state;
  }
};

export default LoginReducer;
