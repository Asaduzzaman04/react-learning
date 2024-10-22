import { useState } from "react";

const StateUse = () => {
  const [count, setCount] = useState(0);
  const [inputValue, setInputValue] = useState(0);

  const handleIncriment = () => {
    if (inputValue === 0) {
      setCount(count + 1);
    } else {
      setCount(count + inputValue);
    }
  };
  const handleDecriment = () => {
    if (inputValue === 0) {
      if (count) {
        setCount(count - 1);
      }
    } else {
      setCount(count + inputValue);
    }
  };
  const handeReset = () => {
    setCount(0);
  };

  return (
    <>
      <main className="w-[50%] h-[50%] border rounded-xl flex justify-center  items-center bg-white text-black">
        <div className="flex flex-col gap-10">
          <div>
            <p className="border text-center capitalize font-semibold py-3 bg-blue-400 rounded-xl">
              use state challenge
            </p>
          </div>
          <section className="flex flex-col justify-center items-start gap-6">
            <p className="font-semibold capitalize ">count : {count}</p>
            <input
              type="number"
              placeholder="enter number for sum "
              className="border-none outline-none px-3 py-1.5 text-xl capitalize rounded-xl bg-gray-200"
              value={inputValue}
              onChange={(e) => setInputValue(Number(e.target.value))}
            />
          </section>
          <section className="flex justify-center items-center gap-8 text-2xl font-bold">
            <button
              className=" px-3 py-2 rounded-lg capitalize active:scale-95 transition-all duration-200 ease-linear bg-green-400"
              onClick={handleIncriment}
            >
              incriment
            </button>
            <button
              className=" px-3 py-2 rounded-lg capitalize active:scale-95 transition-all duration-200 ease-linear bg-red-400"
              onClick={handleDecriment}
            >
              decriment
            </button>
            <button
              className=" px-3 py-2 rounded-lg capitalize active:scale-95 transition-all duration-200 ease-linear bg-black text-white"
              onClick={handeReset}
            >
              reset
            </button>
          </section>
        </div>
      </main>
    </>
  );
};

export default StateUse;
