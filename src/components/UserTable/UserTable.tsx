import { useFetch } from '../../CustomHooks/useFetch';

export const UserTable = () => {
  const { loading, error, data } = useFetch(
    'https://jsonplaceholder.typicode.com/users',
  );
  if (error) {
    return <h1>Something Went Wrong....</h1>;
  }
  if (loading) {
    return <h1>Content is Loading....</h1>;
  }

  return (
    <>
      <h1>User Table</h1>
      <ul>
        {data.map((item, index) => (
          <li key={index}>
            {item.id}-{item.name}
          </li>
        ))}
      </ul>
    </>
  );
};
