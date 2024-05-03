import React, { useState } from "react";
import tableData1 from "./TableData1";
import tableData2 from "./TableData2";
import "./tableData.css";

const TableList = () => {
  const [list, setList] = useState(tableData1);
  const [items, setItems] = useState(tableData2);
  const [view, setView] = useState(false);
  const [selected, setSelected] = useState(null);

  const handlePush = (index) => {
    setItems((olditems) => {
      return [...olditems, list[index]];
    });
    setList((olditems) => {
      return olditems.filter((i, id) => {
        return id !== index;
      });
    });
  };
  const handlePop = (index) => {
    setList((olditems) => {
      return [...olditems, items[index]];
    });
    setItems((olditems) => {
      return olditems.filter((i, id) => {
        return id !== index;
      });
    });
  };
  const handleView = (index) => {
    setView(!view);
    setSelected(index);
  };
  return (
    <>
      <div className="container">
        <h1>Table-1</h1>
        <table>
          <tr>
            <th>Name</th>
            <th>Email</th>
            <th>Phone No.</th>
            <th>Actions</th>
          </tr>

          {list.map((item, index) => {
            return (
              <tr key={index}>
                <td>{item.name}</td>
                <td>{item.email}</td>
                <td>{item.phone}</td>
                <td>
                  <button onClick={() => handlePush(index)}>Push</button>
                  <button onClick={() => handleView(index)}>View</button>
                </td>
              </tr>
            );
          })}
        </table>
        <h1>Table-2</h1>
        <table>
          <tr>
            <th>Name</th>
            <th>Email</th>
            <th>Phone No.</th>
            <th>Actions</th>
          </tr>

          {items.map((item, index) => {
            return (
              <tr key={index}>
                <td>{item.name}</td>
                <td>{item.email}</td>
                <td>{item.phone}</td>
                <td>
                  <button onClick={() => handlePop(index)}>Pop</button>
                  <button onClick={() => handleView(index)}>View</button>
                </td>
              </tr>
            );
          })}
        </table>
        <h1>View</h1>
        {view && (
          <div>
            <p>name : {items[selected]?.name}</p>
            <p>email : {items[selected]?.email}</p>
            <p>phone_no : {items[selected]?.phone}</p>
          </div>
        )}
      </div>
    </>
  );
};
export default TableList;
