import { useState } from "react";

const State = () => {
    const [count, setCount] = useState(0);
const value = () => {
    setCount(() => count + 1)
}
  return (
    <>
    <div className="bg-black flex flex-col justify-center items-center  px-10 py-5 gap-9 text-4xl font-bold uppercase rounded-lg shadow-[0px_3px_3px]">
    <p>{count}</p>
    <button onClick={value} className="bg-sky-800 px-3 py-3 rounded-md"> update </button>
    </div>
    </>
  );
};

export default State;
