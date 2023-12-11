import useCustom from "./useCustom";

const Counter1 = () => {
  const [count, handleDecrement, handleIncrement] = useCustom();
  return (
    <>
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
          padding: "1rem",
        }}
      >
        <h2>Counter1: {count}</h2>
        <div
          style={{
            display: "flex",
            gap: "10px",
            justifyContent: "center",
            alignItems: "center",
            padding: "1rem",
          }}
        >
          <button onClick={handleIncrement}>Increment</button>
          <button onClick={handleDecrement}>Decrement</button>
        </div>
      </div>
    </>
  );
};

export default Counter1;
