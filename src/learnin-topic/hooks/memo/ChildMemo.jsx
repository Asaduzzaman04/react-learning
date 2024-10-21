import { memo } from "react";

const ChildMemo = memo(() => {
  return (
    <div>
      <p>hello i am asad</p>
    </div>
  );
});

export default ChildMemo;
{
  /*The `React.memo` function is a higher-order component that optimizes performance by preventing unnecessary re-renders. It only re-renders a component if its props change, helping to improve efficiency in large or frequently updating applications. */
}
