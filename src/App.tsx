import './App.module.css';
import FormComponent from './components/FormComponent';
import { RecordsComponent } from './components/RecordsComponent';
import useHelperHook from './CustomHooks/useHelperHook';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import RootLayout from './pages/RootLayout';

function App() {
  const { addNewRecord, updateRecord, deleteRecord, records } = useHelperHook();
  const router = createBrowserRouter([
    {
      path: '/crud-with-react',
      element: <RootLayout />,
      children: [
        {
          path: '/crud-with-react',
          element: <FormComponent addNewRecord={addNewRecord} />,
        },
        {
          path: '/crud-with-react/records',
          element: (
            <RecordsComponent
              records={records}
              handleUpdate={(id, updatedData) => updateRecord(id, updatedData)}
              deleteRecord={deleteRecord}
            />
          ),
        },
      ],
    },
  ]);
  return <RouterProvider router={router} />;
}

export default App;
