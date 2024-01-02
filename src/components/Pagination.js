import React, { useEffect, useState } from "react";

const Pagination = () => {
  const [productData, setProductData] = useState([]);
  const fetchProducts = async () => {
    const response = await fetch("https://dummyjson.com/products?limit=100");
    const result = await response.json();
    console.log(result.products);
    setProductData(result.products);
  };
  useEffect(() => {
    fetchProducts();
  }, []);
  return (
    <>
      <div>
        <h1 style={{ textAlign: "center", margin: "1rem" }}>
          List of Products
        </h1>
        <div className="product_container">
          {productData.map((item) => {
            return (
              <>
                <div className="product_box" key={item.id}>
                  <img src={item.thumbnail} alt={item.thumbnail} />
                  <h3>{item.title.substring(0, 10)}...</h3>
                </div>
              </>
            );
          })}
        </div>
      </div>
    </>
  );
};

export default Pagination;
