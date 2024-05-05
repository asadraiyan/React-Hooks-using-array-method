import React from "react";
import useFetch from "./useFetch";

const FetchApi = () => {
  const { data, loading, error } = useFetch(
    "https://jsonplaceholder.typicode.com/users"
  );

  if (loading) return <h1>Loading...</h1>;
  if (error) return <h1>Something went wrong</h1>;
  return (
    <div>
      <h1>Data fetched Successfully</h1>
      <pre>{JSON.stringify(data, undefined, 2)}</pre>
    </div>
  );
};

export default FetchApi;
