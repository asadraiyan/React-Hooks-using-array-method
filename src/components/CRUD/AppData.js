import React from "react";
import "./AppData.css";

const AppData = () => {
  return (
    <>
      <div className="container">
        <h1>CRUD Operation</h1>
        <table className="content-table">
          <thead>
            <tr>
              <th>Id</th>
              <th>Name</th>
              <th>email</th>
              <th>phone</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>1</td>
              <td>Asad Raiyan</td>
              <td>asad@test.com</td>
              <td>9876543210</td>
            </tr>
            <tr>
              <td>1</td>
              <td>Asad Raiyan</td>
              <td>asad@test.com</td>
              <td>9876543210</td>
            </tr>
            <tr>
              <td>1</td>
              <td>Asad Raiyan</td>
              <td>asad@test.com</td>
              <td>9876543210</td>
            </tr>
            <tr>
              <td>1</td>
              <td>Asad Raiyan</td>
              <td>asad@test.com</td>
              <td>9876543210</td>
            </tr>
            <tr>
              <td>1</td>
              <td>Asad Raiyan</td>
              <td>asad@test.com</td>
              <td>9876543210</td>
            </tr>
          </tbody>
        </table>
      </div>
    </>
  );
};

export default AppData;
