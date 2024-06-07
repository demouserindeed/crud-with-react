import { ChangeEvent, useState, useRef, Fragment } from 'react';
import { FormProps, FormStateType } from '../types/types';
import { RecordsComponent } from './RecordsComponent';
import { FormElements, defaultFormData } from '../constants/constants';
import { useDispatch, useSelector } from 'react-redux';
import { ADD_RECORD, UPDATE_RECORD } from '../redux/reducers';

export default function FormComponent() {
  const [formData, setFormData] = useState(defaultFormData as FormProps);
  const photoRef = useRef<HTMLInputElement>(null);
  const dispatch = useDispatch();
  const records = useSelector(
    (state: FormStateType) => state.recordReducer.records,
  );

  const changeHandler = (event: ChangeEvent<HTMLInputElement>) => {
    const { name, value, files } = event.target;
    if (name === 'photo') {
      const file = files?.[0];

      if (file) {
        const src = URL.createObjectURL(file);
        setFormData((prev) => ({
          ...prev,
          photo: src,
        }));
      }
    } else {
      setFormData((prev) => ({
        ...prev,
        [name]: value,
      }));
    }
  };

  const saveRecord = () => {
    const newRecordWithId = { ...formData, id: Math.random().toString() };
    dispatch(ADD_RECORD(newRecordWithId));
    setFormData(defaultFormData as FormProps);

    if (photoRef.current) {
      photoRef.current.value = '';
    }
  };

  return (
    <>
      <div
        style={{
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
        }}
      >
        <div
          style={{
            padding: '5px',
            border: '1px solid gray',
            borderRadius: '0 0 5px gray',
          }}
        >
          <h1 style={{ textAlign: 'center' }}>Form</h1>
          <form
            style={{
              display: 'flex',
              flexDirection: 'column',
            }}
          >
            {FormElements.map((element) =>
              element.name === 'photo' ? (
                <Fragment key={element.id}>
                  <label htmlFor={element.id}>{element.label}</label>
                  <input
                    id={element.id}
                    type={element.type}
                    name={element.name}
                    onChange={changeHandler}
                    ref={photoRef}
                  />
                </Fragment>
              ) : (
                <Fragment key={element.id}>
                  <label htmlFor={element.id}>{element.label}</label>
                  <input
                    id={element.id}
                    type={element.type}
                    name={element.name}
                    placeholder={element.placeholder}
                    onChange={changeHandler}
                    value={formData[element.name as keyof typeof formData]}
                  />
                </Fragment>
              ),
            )}

            <button
              style={{ marginTop: '10px' }}
              onClick={saveRecord}
              type="button"
            >
              Submit
            </button>
          </form>
        </div>
      </div>

      <div style={{ textAlign: 'center' }}>
        <h1>Records</h1>
        <RecordsComponent
          records={records}
          handleUpdate={(id, updatedData) =>
            dispatch(UPDATE_RECORD({ id, updatedData }))
          }
        />
      </div>
    </>
  );
}
