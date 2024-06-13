import { FormProps } from '../../types/types';

export const ADD_RECORD = (newRecord: FormProps) => {
  return {
    type: 'add',
    payload: {
      newRecord,
    },
  };
};

export const UPDATE_RECORD = (id: string, updatedRecord: FormProps) => {
  return {
    type: 'update',
    payload: { id, updatedRecord },
  };
};

export const DELETE_RECORD = (id: string) => {
  return {
    type: 'delete',
    payload: {
      id,
    },
  };
};

export const LOGIN = () => {
  return {
    type: 'login',
  };
};

export const LOGOUT = () => {
  return {
    type: 'logout',
  };
};
