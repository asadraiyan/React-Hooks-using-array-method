import React, { useEffect, useState } from "react";
import "./style.css";

const ExpenseTracker = () => {
  const [itemData, setItemData] = useState({
    itemName: "",
    itemAmount: "",
  });

  const [itemList, setItemList] = useState([]);
  const [showItem, setShowItem] = useState(false);

  const itemsFromLocal = localStorage.getItem("items");

  useEffect(() => {
    if (itemsFromLocal) {
      setItemList(JSON.parse(itemsFromLocal));
      setShowItem(true);
    }
  }, [itemsFromLocal]);

  // console.log("itemList=", itemList);

  const handleItemChange = (e) => {
    setItemData({
      ...itemData,
      [e.target.name]: e.target.value,
    });
  };

  //   console.log(itemData);

  const handleSubmit = () => {
    if (itemData.itemName === "" || itemData.itemAmount === "") return;
    const copyItemList = [...itemList, itemData];
    setItemList(copyItemList);
    localStorage.setItem("items", JSON.stringify(copyItemList));
    setShowItem(true);
    setItemData({
      itemName: "",
      itemAmount: "",
    });
  };

  const handleClear = () => {
    setItemList([]);
    localStorage.removeItem("items");
    setShowItem(false);
  };

  const totalAmount = itemList.reduce((total, item) => {
    return total + Number(item.itemAmount);
  }, 0);

  return (
    <div className="container">
      <h1>Expense Tracker</h1>
      <div className="item-name">
        <label>Item Name :</label>
        <input
          type="text"
          placeholder="Enter your item name"
          value={itemData.itemName || ""}
          name="itemName"
          onChange={handleItemChange}
        />
      </div>
      <div className="item-amount">
        <label>Item Amount :</label>
        <input
          type="number"
          placeholder="Enter your item amount"
          value={itemData.itemAmount || ""}
          name="itemAmount"
          onChange={handleItemChange}
        />
      </div>
      <div className="btns">
        <button onClick={handleSubmit}>Add Item</button>
        <button onClick={handleClear}>Clear All</button>
      </div>
      {showItem && (
        <div>
          <ol>
            {itemList.map((items, index) => {
              return (
                <li
                  key={index}
                >{`${items.itemName} : ₹${items.itemAmount}`}</li>
              );
            })}
          </ol>
          <h2 className="totalAmount">Total Amount: ₹{totalAmount}</h2>
        </div>
      )}
    </div>
  );
};

export default ExpenseTracker;
