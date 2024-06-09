import './App.module.css';
import FormComponent from './components/FormComponent';
import RecordsComponent from './components/RecordsComponent';
import useHelperHook from './CustomHooks/useHelperHook';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import RootLayout from './pages/RootLayout';
import Login from './pages/Login/Login';
import AuthContext from './components/AuthContext/AuthContext';

function App() {
  const { addNewRecord, updateRecord, deleteRecord, records } = useHelperHook();
  const router = createBrowserRouter([
    { path: '/crud-with-react', element: <Login /> },
    {
      path: '/crud-with-react/main',
      element: <RootLayout />,
      children: [
        {
          path: '/crud-with-react/main',
          element: <FormComponent addNewRecord={addNewRecord} />,
        },
        {
          path: '/crud-with-react/main/records',
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
  return (
    <AuthContext>
      <RouterProvider router={router} />
    </AuthContext>
  );
}

export default App;
