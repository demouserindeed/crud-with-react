import {
  ADD_RECORD,
  UPDATE_RECORD,
  DELETE_RECORD,
} from '../redux/actions/actions';
import { useDispatch, useSelector } from 'react-redux';
import { FormProps, initialStateType } from '../types/types';

const useHelperHook = () => {
  const dispatch = useDispatch();
  const records = useSelector((state: initialStateType) => state.records);

  const addNewRecord = (data: FormProps) => {
    dispatch(ADD_RECORD(data));
  };

  const updateRecord = (id: string, updatedData: FormProps) => {
    dispatch(UPDATE_RECORD(id, updatedData));
  };

  const deleteRecord = (id: string) => {
    dispatch(DELETE_RECORD(id));
  };

  return { addNewRecord, updateRecord, deleteRecord, records };
};

export default useHelperHook;
