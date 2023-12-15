import React, { useEffect, useState } from "react";
import "./AppData.css";
import axios from "axios";
import { Link, useNavigate } from "react-router-dom";

const AppData = () => {
  const [userData, setUserData] = useState([]);
  const [heading, setHeading] = useState([]);

  const navigate = useNavigate();
  useEffect(() => {
    axios.get("http://localhost:3030/users").then((res) => {
      setHeading(Object.keys(res.data[0]));
      setUserData(res.data);
    });
  }, []);

  const handleDelete = (id) => {
    const confirm = window.confirm("Do you want to delete this?");
    if (confirm) {
      axios
        .delete(`http://localhost:3030/users/${id}`)
        .then((res) => {
          alert("Record has been deleted");
          const updatedRecords = heading.filter((data) => {
            return data.id !== id;
          });
          setHeading(updatedRecords);
          navigate("/");
        })
        .catch((err) => console.log(err));
    }
  };
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
              <th>ACTIONS</th>
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
                    <Link to={`/update/${record.id}`}>
                      <button className="edit-btn">Edit</button>
                    </Link>
                    <button
                      onClick={() => handleDelete(record.id)}
                      className="dlt-btn"
                    >
                      Delete
                    </button>
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
