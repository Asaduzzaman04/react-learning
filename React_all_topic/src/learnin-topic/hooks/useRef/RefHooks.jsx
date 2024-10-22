import { useState } from "react";
import { useRef } from "react";

const RefHooks = () => {
  const userName = useRef(null);
  const [data, setData] = useState([]);

  const handleSubmit = (e) => {
    e.preventDefault();
    if(!userName) return
    if (data.find((items) => items.names === userName.current.value)) return;
    setData((prev) => [...prev, { names: userName.current.value }]);
  };
  console.log(data);

  return (
    <div className="text-black">
      <form onSubmit={handleSubmit}>
        <input type="text" spellCheck="false" ref={userName} />
        <button type="submit" className="bg-indigo-300 rounded-lg ml-3">
          submit
        </button>
      </form>
    </div>
  );
};

export default RefHooks;

{
  /*
  => In React, the `useRef` hook creates a mutable reference that persists across renders without causing re-renders when updated. It's commonly used to access DOM elements or store values that need to be retained between renders.
  => focus() method is when rander page user cursor  focus in input section!
  */
}
