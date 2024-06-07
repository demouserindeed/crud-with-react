import { initialStateType } from '../../types/types';
import { createSlice } from '@reduxjs/toolkit';

const initialState: initialStateType = {
  records: [],
};

const recordReducerSlice = createSlice({
  name: 'recordSlice',
  initialState,
  reducers: {
    ADD_RECORD(state, action) {
      console.log('payload===', action);
      state.records = [...state.records, action.payload];
    },
    UPDATE_RECORD(state, action) {
      const { id, updatedData } = action.payload;
      state.records = state.records.map((record) =>
        record.id === id ? updatedData : record,
      );
    },
    DELETE_RECORD(state, action) {
      state.records = state.records.filter(
        (record) => record.id !== action.payload,
      );
    },
  },
});

export const { DELETE_RECORD, ADD_RECORD, UPDATE_RECORD } =
  recordReducerSlice.actions;
export default recordReducerSlice.reducer;
