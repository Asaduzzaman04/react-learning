import react, { forwardRef } from "react";

const ChildRef = forwardRef(({value},ref) => {
  return <>
  <form>
        <input type="text" ref={ref} placeholder={value} />
  </form>
  </>;
});

export default ChildRef;
