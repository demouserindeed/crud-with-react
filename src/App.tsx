// import './App.css'
import FormComponent from './components/FormComponent';
import { RecordsComponent } from './components/RecordsComponent';
import useHelperHook from './CustomHooks/useHelperHook';

function App() {
  const { addNewRecord, updateRecord, deleteRecord, records } = useHelperHook();
  return (
    <>
      <FormComponent addNewRecord={addNewRecord} />
      <div style={{ textAlign: 'center' }}>
        <h1>Records</h1>
        <RecordsComponent
          records={records}
          handleUpdate={(id, updatedData) => updateRecord(id, updatedData)}
          deleteRecord={deleteRecord}
        />
      </div>
    </>
  );
}

export default App;
