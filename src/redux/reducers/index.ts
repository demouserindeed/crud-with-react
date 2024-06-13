import FormReducer from './FormReducer/FormReducer';
import LoginReducer from './LoginReducer/LoginReducer';
import { combineReducers } from 'redux';

const rootReducer = combineReducers({
  FormReducer,
  LoginReducer,
});

export default rootReducer;
