import { SetStateAction, Dispatch } from 'react';

export type FormProps = {
  name: string;
  email: string;
  phone: string;
  photo: string;
  id: string;
};

export type ReducerAction = {
  type: string;
  payload: {
    id?: string;
    updatedRecord?: FormProps;
    newRecord?: FormProps;
  };
};

export type initialStateType = {
  records: FormProps[];
};

export type AuthenticationContextType = {
  isAuthenticated: boolean;
  setIsAuthenticated: Dispatch<SetStateAction<boolean>>;
};
