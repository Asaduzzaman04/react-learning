import { useEffect } from "react";
import { useState } from "react";

const HooksEffect = () => {
  const [clock, setClock] = useState({
    datting: "",
    time: "",
  });
  const [count, setCount] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      const timing = () => {
        const date = new Date();
        const final = {
          datting: date.toLocaleDateString(),
          time: date.toLocaleTimeString(),
        };
        setClock(() => final);
      };
      timing();
    }, 1000);
    return () => clearTimeout(interval);
  }, []);

  const handleCount = () => {
    setCount(count + 1);
  };
  useEffect(() => {
    console.log("hello world", count);
  }, [count]);

  return (
    <>
      <div className="flex flex-col gap-10 justify-center text-center items-center">
        <p>{clock.datting}</p>
        <p>{clock.time}</p>

        <div>
          <p>{count}</p>
          <button onClick={handleCount}>incriment</button>
        </div>
      </div>
    </>
  );
};

export default HooksEffect;

{
  /*
useEffct => useEffect is perfome side effect in react components. Side effects can include things like data fetching, subscriptions, or manually changing the DOM. By using useEffect,  React to run a piece of code (effect) after the component has rendered.Without the dependency array, useEffect would execute after every render, which could lead to inefficient or redundant operations.
    */
}