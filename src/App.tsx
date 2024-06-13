import './App.module.css';
import useHelperHook from './CustomHooks/useHelperHook';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import RootLayout from './pages/RootLayout';
import Login from './pages/Login/Login';
import { lazy, Suspense } from 'react';
import { waitfor } from './utils/helpers';

const FormComponent = lazy(() =>
  waitfor(1000).then(() => import('./components/FormComponent')),
);
const RecordsComponent = lazy(() => import('./components/RecordsComponent'));

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
    <Suspense fallback={<h1>Loading...</h1>}>
      <RouterProvider router={router} />
    </Suspense>
  );
}

export default App;
