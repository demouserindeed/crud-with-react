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
