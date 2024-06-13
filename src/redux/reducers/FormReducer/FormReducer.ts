import {
  initialStateType,
  ReducerAction,
  FormProps,
} from '../../../types/types';

const initialState: initialStateType = {
  records: [],
};

const FormReducer = (
  state: initialStateType = initialState,
  action: ReducerAction,
): initialStateType => {
  switch (action.type) {
    case 'add':
      return {
        ...state,
        records: [...state.records, action.payload.newRecord as FormProps],
      };
    case 'update':
      const { id, updatedRecord } = action.payload;
      return {
        ...state,
        records: state.records.map((record) =>
          record.id === id ? (updatedRecord as FormProps) : record,
        ),
      };
    case 'delete':
      const updatedRecordArr = state.records.filter(
        (record) => record.id !== action.payload.id,
      );
      return {
        ...state,
        records: updatedRecordArr,
      };
    default:
      return state;
  }
};

export default FormReducer;
