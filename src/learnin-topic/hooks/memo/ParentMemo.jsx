import { useState } from "react";
import ChildMemo from "./ChildMemo";

const ParentMemo = () => {
  const [count, setCount] = useState(0);
  const [data, setData] = useState({
    name: "Mohit",
    age: 20,
    city: "Mumbai",
  });
  return (
    <div>
      <div>
        <p>{count}</p>
        <button onClick={() => setCount(count + 1)}>Click</button>
      </div>
      <ChildMemo value={data} />
    </div>
  );
};

export default ParentMemo;

{
  /* react.memo  always re-render when we pass a  Object value  */
}
{
  /*
   * I pass a object value in Childmemo it will re-render the childcomponents for pass object value
   * if the child value is won't change in the child component it will  re-render this happens because each render creates a new object reference in memory
   */
}
