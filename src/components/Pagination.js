import React, { useEffect, useState } from "react";
import Loader from "./Crypto/Loader";

const Pagination = () => {
  const [productData, setProductData] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [postsPerPage] = useState(10);
  const [input, setInput] = useState();
  const [loader, setLoader] = useState(true);
  const fetchProducts = async () => {
    const response = await fetch("https://dummyjson.com/products?limit=100");
    const result = await response.json();
    console.log(result.products);
    setProductData(result.products);
    setLoader(false);
  };
  useEffect(() => {
    return () => {
      fetchProducts();
    };
  }, []);
  const handleInputChange = (e) => {
    setInput(e.target.value);
    setLoader(true);
    setTimeout(() => {
      fetchProducts();
      setLoader(false);
    }, 200);
  };

  const lastPostIndex = currentPage * postsPerPage;
  console.log("lastPostIndex=", lastPostIndex);
  const firstPostIndex = lastPostIndex - postsPerPage;
  console.log("firstPostIndex=", firstPostIndex);
  const currentPosts = productData.slice(firstPostIndex, lastPostIndex);

  let pages = [];
  for (let i = 1; i <= Math.ceil(productData.length / postsPerPage); i++) {
    pages.push(i);
  }
  return (
    <>
      <div>
        <h1 style={{ textAlign: "center", margin: "1rem" }}>
          List of Products
        </h1>
        <div className="search_box">
          <input
            type="text"
            placeholder="Search the product..."
            onChange={handleInputChange}
            value={input || ""}
          />
        </div>
        <div className="loader_div">{loader && <Loader />} </div>

        <div className="product_container">
          {currentPosts
            .filter((item) => {
              return (
                !input || item.title.toLowerCase().includes(input.toLowerCase())
              );
            })
            .map((item) => {
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
        <div className="pages">
          {pages.map((page, index) => {
            return (
              <button
                className={page === currentPage ? "active " : ""}
                key={index}
                onClick={() => setCurrentPage(page)}
              >
                {page}
              </button>
            );
          })}
        </div>
      </div>
    </>
  );
};
export default Pagination;
