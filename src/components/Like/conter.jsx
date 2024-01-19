const likeConter = () => {
  const [count, setCount] = useState(0);
  const incroment = () => setCount((prevCont) => prevCont + 1);
  const decrement = () => setCount((prevCont) => prevCont - 1);
  const reset = () => setCount(0);

  return (
    <section>
      <button onClick={incroment}>Like</button>
      <button onClick={decrement}>Test</button>
      <button onClick={reset}>Reset</button>
      <p>Likes: {count}</p>
    </section>
  );
};
export default likeConter;
