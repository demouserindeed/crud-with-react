export type FormProps = {
  name: string;
  email: string;
  phone: string;
  photo: string;
  id: string;
};

export type initialStateType = {
  records: FormProps[];
};

export type FormStateType = {
  recordReducer: {
    records: FormProps[];
  };
};
