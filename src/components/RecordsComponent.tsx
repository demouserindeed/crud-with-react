import { FormElements, defaultFormData } from '../constants/constants';
import { DELETE_RECORD } from '../redux/reducers';
import { FormProps } from '../types/types';
import { ChangeEvent, useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';

type RecordsParam = {
  records: FormProps[];
  handleUpdate: (id: string, updatedData: FormProps) => void;
};

export const RecordsComponent = ({ records, handleUpdate }: RecordsParam) => {
  const [updateId, setUpdateId] = useState<string>();
  const [updatedFormValues, setUpdatedFormValues] = useState(
    defaultFormData as FormProps,
  );
  const dispatch = useDispatch();

  const changeHandler = (event: ChangeEvent<HTMLInputElement>) => {
    const { name, value, files } = event.target;
    if (name === 'photo') {
      const file = files?.[0];

      if (file) {
        const src = URL.createObjectURL(file);
        setUpdatedFormValues((prev) => ({
          ...prev,
          photo: src,
        }));
      }
    } else {
      setUpdatedFormValues((prev) => ({
        ...prev,
        [name]: value,
      }));
    }
  };

  useEffect(() => {
    if (updateId) {
      const recordForUpdatedId = records.filter((item) => item.id === updateId);
      setUpdatedFormValues(recordForUpdatedId[0]);
    }
  }, [updateId, records]);
  return (
    <div>
      <table style={{ width: '100%' }}>
        <thead>
          <tr>
            <th>Name</th>
            <th>Email</th>
            <th>Phone</th>
            <th>Photo</th>
          </tr>
          {records.map((record, index) =>
            updateId && record.id === updateId ? (
              <tr key={index}>
                {FormElements.map((element) =>
                  element.name === 'photo' ? (
                    <td key={`updated_${element.id}`}>
                      <input
                        id={`updated_${element.id}`}
                        type={element.type}
                        name={element.name}
                        onChange={changeHandler}
                      />
                    </td>
                  ) : (
                    <td key={`updated_${element.id}`}>
                      <input
                        id={`updated_${element.id}`}
                        type={element.type}
                        name={element.name}
                        placeholder={element.placeholder}
                        onChange={changeHandler}
                        value={
                          updatedFormValues[
                            element.name as keyof typeof updatedFormValues
                          ]
                        }
                      />
                    </td>
                  ),
                )}
                <td>
                  <button
                    type="button"
                    onClick={() => {
                      handleUpdate(updateId, updatedFormValues);
                      setUpdateId('');
                    }}
                  >
                    Save
                  </button>
                </td>
              </tr>
            ) : (
              <tr key={index}>
                <td>{record.name}</td>
                <td>{record.email}</td>
                <td>{record.phone}</td>
                <td>
                  <img src={record.photo} width="40px" height="40px" />
                </td>
                <td>
                  <button type="button" onClick={() => setUpdateId(record.id)}>
                    Update
                  </button>
                </td>
                <td>
                  <button
                    type="button"
                    onClick={() => dispatch(DELETE_RECORD(record.id))}
                  >
                    Delete
                  </button>
                </td>
              </tr>
            ),
          )}
        </thead>
      </table>
    </div>
  );
};
