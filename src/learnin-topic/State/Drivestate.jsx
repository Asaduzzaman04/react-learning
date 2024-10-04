import { useEffect } from "react";
import { useState } from "react";

const Drivestate = () => {
  const info = [
    { item: "abc", price: 10, quantity: 2 },
    { item: "jkl", price: 20, quantity: 1 },
    { item: "xyz", price: 5, quantity: 10 },
    { item: "xyz", price: 5, quantity: 20 },
    { item: "abc", price: 10, quantity: 10 },
    { item: "def", price: 7.5, quantity: 5 },
    { item: "def", price: 7.5, quantity: 10 },
    { item: "abc", price: 10, quantity: 5 },
  ];
  const [list, SetList] = useState([]);
  useEffect(() => {
    SetList(info);
  }, []);

  const res = list.reduce((acc, crr) => {
    const items = acc + crr.price / list.length;
    const round = Math.round(items);
    return round;
  }, 0);
  
 
  return (<>
    <div>
         <p className="font-bold capitalize">total average price in per products is {res} </p>
    </div>
  </>);
};

export default Drivestate;

{/*In React, derived state refers to a state value that is computed or derived from other state values or props, rather than being directly set by the user or through events. Instead of storing this kind of state directly, you calculate it when it's needed, based on other existing data.

React developers usually avoid putting derived state in useState because doing so can lead to bugs like unnecessary re-renders or state becoming out of sync. */}
