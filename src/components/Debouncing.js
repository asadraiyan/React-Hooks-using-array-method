import React from "react";

const Debouncing = () => {
  let counter = 0;
  const getData = () => {
    console.log(`Fetching data ${counter++}`);
  };

  function myDebounce(call, delay) {
    let timer;
    return function (...args) {
      if (timer) clearTimeout(timer);
      timer = setTimeout(() => {
        call();
      }, delay);
    };
  }
  const betterFunc = myDebounce(getData, 300);

  function myThrottle(fn, delay) {
    return function (...args) {
      document.getElementById("btn").disabled = true;
      setTimeout(() => {
        fn();
      }, delay);
    };
  }
  const myFun = myThrottle(() => {
    document.getElementById("btn").disabled = false;
    console.log("clicked");
  }, 2500);
  return (
    <div style={{ marginLeft: "10px" }}>
      <h2>Debouncing</h2>
      <input type="text" onKeyUp={betterFunc} />
      <h2>Throttling</h2>
      <button onClick={myFun} id="btn">
        Click Me
      </button>
    </div>
  );
};

export default Debouncing;
