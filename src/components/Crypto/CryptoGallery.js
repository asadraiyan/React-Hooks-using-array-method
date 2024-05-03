import React, { useEffect, useState } from "react";
import "./CryptoGallery.css";
import CryptoCard from "./CryptoCard";
import Loader from "./Loader";

const CryptoGallery = () => {
  const [data, setData] = useState([]);
  const [page, setPage] = useState(1);
  const [loader, setLoader] = useState(true);
  const fetchData = async () => {
    const response = await fetch(
      `https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=12&page=${page}&sparkline=false`
    );
    const resData = await response.json();
    console.log(resData);
    setData((prevData) => [...prevData, ...resData]);
    setLoader(false);
  };

  useEffect(() => {
    fetchData();
  }, [page]);

  // useEffect(() => {
  //   window.addEventListener("scroll", handleScroll);
  //   return () => window.removeEventListener("scroll", handleScroll);
  // }, []);

  // const handleScroll = async () => {
  //   if (
  //     window.innerHeight + document.documentElement.scrollTop + 1 >=
  //     document.documentElement.scrollHeight
  //   ) {
  //     setLoader(true);
  //     setPage((prev) => prev + 1);
  //   }
  // };
  return (
    <>
      <div className="heading">
        <h1>Crypto Gallery</h1>
      </div>
      <div className="container">
        {data.map((item, index) => {
          return <CryptoCard item={item} key={index} />;
        })}
        {loader && <Loader />}
      </div>
    </>
  );
};

export default CryptoGallery;
