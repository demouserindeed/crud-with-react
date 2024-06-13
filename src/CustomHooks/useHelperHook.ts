import {
  ADD_RECORD,
  UPDATE_RECORD,
  DELETE_RECORD,
  LOGIN,
  LOGOUT,
} from '../redux/actions/actions';
import { useDispatch, useSelector } from 'react-redux';
import { FormProps, finalStateType } from '../types/types';

const useHelperHook = () => {
  const dispatch = useDispatch();
  const records = useSelector(
    (state: finalStateType) => state.FormReducer.records,
  );
  const loginStatus = useSelector(
    (state: finalStateType) => state.LoginReducer,
  );

  const addNewRecord = (data: FormProps) => {
    dispatch(ADD_RECORD(data));
  };

  const updateRecord = (id: string, updatedData: FormProps) => {
    dispatch(UPDATE_RECORD(id, updatedData));
  };
  const deleteRecord = (id: string) => {
    dispatch(DELETE_RECORD(id));
  };

  const login = () => {
    dispatch(LOGIN());
  };

  const logout = () => {
    dispatch(LOGOUT());
  };

  return {
    addNewRecord,
    updateRecord,
    deleteRecord,
    records,
    login,
    logout,
    loginStatus,
  };
};

export default useHelperHook;
