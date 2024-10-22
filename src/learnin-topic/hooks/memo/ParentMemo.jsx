import { useMemo, useState } from "react";
import ChildMemo from "./ChildMemo";

const ParentMemo = () => {
  const [count, setCount] = useState(0);
  const data = useMemo(() => {
    return {
      name: "Mohit",
      age: 20,
      city: "Mumbai",
    };
  }, []);
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

//usememo
{
  /*
   * using useMemo to memoize the data object (its won't change the memory reference for this it will not re-render) in the parent component. This ensures that the data object is only created once and not re-created on every render of the parent component.
  * It will also ensure that the child component is only re-rendered when the data object changes.
  * uesMemo and react.memo are the two main ways to optimize performance in React. The useMemo hook is used to memoize the result of a function call and the react.memo higher-order component is used to memoize the output of a component.
  * It's important to note that these two approaches are not mutually exclusive. You can use both useMemo and react.memo to optimize performance in your React applications.
   */
}
