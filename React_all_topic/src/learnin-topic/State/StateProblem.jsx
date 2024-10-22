import { useEffect, useState } from "react";


const StateProblem = () => {
  const people = [
    { name: "John", age: 25 },
    { name: "Sarah", age: 30 },
    { name: "Mike", age: 28 },
    { name: "Emma", age: 22 },
  ];
const [user,  setUser] = useState([])

useEffect(()=>{
    setUser(people)
},[])

  return (<>
    <ul className="border px-10 bg-black capitalize flex flex-col justify-center items-center gap-6">
        <p className="mx-auto border bg-amber-700">totoal info</p>
        {user.map((el,i) =>{
            return(
                <>
                <li key={i}>my name is {el.name} & age is {el.age}</li>
                </>
            )
        })}
    </ul>
  </>)
};

export default StateProblem;
