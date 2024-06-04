export const FormElements = [
  {
    id: 'name',
    name: 'name',
    placeholder: 'type name',
    type: 'text',
    label: 'Name',
  },
  {
    id: 'email',
    name: 'email',
    placeholder: 'type email',
    type: 'text',
    label: 'Email',
  },
  {
    id: 'phone',
    name: 'phone',
    placeholder: 'type phone',
    type: 'number',
    label: 'Phone',
  },
  {
    id: 'photo',
    name: 'photo',
    type: 'file',
    label: 'Upload Photo',
  },
];

export const defaultFormData = {
  name: '',
  email: '',
  phone: '',
  photo: '',
  id: '',
};
