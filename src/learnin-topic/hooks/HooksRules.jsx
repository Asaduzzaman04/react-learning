import { useState } from "react";

const HooksRules = () => {
  // hooks can only be used at top label of our components [its only can use in function components cannot work in regular javascript or class components]
  const [count, setCount] = useState(0); 
  if (count === 0) {
    setCount(count + 1);
  }
  return <div>{count}</div>;
};

export default HooksRules;

{
  /* 
  [=====Hooks Start with use___ prefix=====]
  it defined in first so it run first and react hooks gradually render up to down  in components

    
     Incorrect: Hook inside a condition
if (someCondition) {
  const [state, setState] = useState(0); // ❌ This will break the rules of hooks
}

    Incorrect: Hook inside a loop
for (let i = 0; i < 5; i++) {
  const [count, setCount] = useState(0); // ❌ This is also incorrect
}

    */
}

{
  /*
01.Basic Hooks:
    useState
    useEffect
    useContext
02.Additional Hooks:
    useReducer
    useCallback
    useMemo
    useRef
    useImperativeHandle
    useLayoutEffect
    useDebugValue
    useId (introduced in React 18)
03.Server-Side Hooks (for Next.js and SSR environments):
    useDeferredValue
    useTransition
    useSyncExternalStore 
 */
}
