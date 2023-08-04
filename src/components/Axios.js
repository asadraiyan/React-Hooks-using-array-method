import React, { useEffect, useState } from "react";
import axios from "axios";

const Axios = () => {
  const [myData, setMyData] = useState([]);
  const [isError, setIsError] = useState("");

  // Using Promises
  // useEffect(() => {
  //     axios.get("https://jsonplaceholder.typicode.com/posts")
  //         .then((res) => {
  //             setMyData(res.data)
  //         })
  //         .catch((error) => {
  //             setIsError(error.message)
  //         })
  // }, [])

  // Using async & await
  const getApiData = async () => {
    try {
      const res = await axios.get("https://jsonplaceholder.typicode.com/posts");
      setMyData(res.data);
    } catch (error) {
      setIsError(error.message);
    }
  };
  useEffect(() => {
    getApiData();
  }, []);
  return (
    <>
      <h1>Axios Tutorial</h1>
      {isError !== "" && <h2>{isError}</h2>}
      {myData.map((post) => {
        const { id, body, title } = post;
        return (
          <div key={id}>
            <h2>{title}</h2>
            <p>{body}</p>
          </div>
        );
      })}
    </>
  );
};

export default Axios;
