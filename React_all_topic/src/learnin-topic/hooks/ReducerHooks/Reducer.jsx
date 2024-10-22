import { useReducer } from "react";

const reducer = (state, action) => {
  switch (action.name) {
    case "asad":
      return state + 1;
    case "adnan":
      return state - 1;
    default:
      return state;
  }
};

const Reducer = () => {
  const initialVAlue = 0;
  const [count, dispatch] = useReducer(reducer, initialVAlue);
  

  return (
    <div className="text-center">
      <p>{count}</p>
      <button
        onClick={() => dispatch({ name: "asad" })}
        className="border px-1 py-0.5 rounded-lg mt-4 mr-10"
      >
        incriment
      </button>
      <button
        onClick={() => dispatch({ name: "adnan" })}
        className="border px-1 py-0.5 rounded-lg mt-4"
      >
        decriment 
      
      </button>
    </div>
  );
};

export default Reducer;
{
  /* useReducer hook in React is excellent! It clearly explains the purpose, key concepts, and advantages of using useReducer, and it’s structured in a way that both beginners and advanced developers can follow. If you wanted to expand on this, you could also include a basic example to demonstrate how the hook works in action */
}
{
  /*
   *The reducer function handles two actions: 'increment' and 'decrement'.
   *dispatch triggers the reducer with an action, which updates the state accordingly.
   *The initialState object defines the starting value for the state.
   */
}
