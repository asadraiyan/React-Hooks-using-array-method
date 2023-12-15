import React, { useEffect, useState } from "react";
import "./AppData.css";
import axios from "axios";
import { Link } from "react-router-dom";

const AppData = () => {
  const [userData, setUserData] = useState([]);
  const [heading, setHeading] = useState([]);
  useEffect(() => {
    axios.get("http://localhost:3030/users").then((res) => {
      setHeading(Object.keys(res.data[0]));
      setUserData(res.data);
    });
  }, []);
  return (
    <>
      <div className="container">
        <h1>CRUD Operation</h1>
        <div className="create">
          <Link to="/create">
            <button>Add +</button>
          </Link>
        </div>
        <table className="content-table">
          <thead>
            <tr>
              {heading.map((head, index) => {
                return <th key={index}>{head.toUpperCase()}</th>;
              })}
              <th>Actions</th>
            </tr>
          </thead>
          <tbody>
            {userData.map((record, index) => {
              return (
                <tr key={index}>
                  <td>{record.id}</td>
                  <td>{record.name}</td>
                  <td>{record.email}</td>
                  <td>{record.phone}</td>
                  <td className="eddel">
                    <button>Edit</button>
                    <button>Delete</button>
                  </td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>
    </>
  );
};

export default AppData;
