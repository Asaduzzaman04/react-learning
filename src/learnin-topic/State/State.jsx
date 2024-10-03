import { useState } from "react";


const State = () => {
    
   
  const [count, setCount] = useState(0);
  const handleClick = () => {
     setCount(count + 1)
  };

  return (
    <div className="flex flex-col justify-center items-center gap-5">
      <p className={`font-bold text-3xl p-3 rounded-full ${count < 10 ? `bg-red-500` : `bg-blue-600`}`} >{count} </p>
      <button
        onClick={handleClick}
        className=" px-5 py-2 rounded-lg bg-sky-500 text-gray-900 capitalize font-bold shadow-sm shadow-blue-50"
      >
        incriment
      </button>
  
    </div>
  );
};

export default State;
