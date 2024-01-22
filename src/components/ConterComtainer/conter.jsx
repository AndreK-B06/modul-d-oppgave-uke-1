import { useState } from "react";

export default function CounterButtons() {
  const [count, setCount] = useState(0);
  return (
    <>
      <section className="conter-Comtainer">
        <button
          className="conter-btn"
          id="increment"
          onClick={() => setCount(count + 1)}
        >
          increment
        </button>
        <button
          className="conter-btn"
          id="decrement"
          onClick={() => setCount(count - 1)}
        >
          Decrement
        </button>
        <button
          className="conter-btn"
          id="reset"
          onClick={() => setCount(count == 0)}
        >
          reset
        </button>
      </section>
      <p id="display-conter">{count}</p>
    </>
  );
}
// function handleClick() {
//   // setCount(cont + 1);
//   return
//   <button onClick={handleClick}>Increace</button>;
// }
