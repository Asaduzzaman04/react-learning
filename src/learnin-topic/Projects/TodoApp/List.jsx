import { MdDelete } from "react-icons/md";
import { useState } from "react";

/* eslint-disable react/prop-types */


const List = ({ value,deleted }) => {
  const [taskDone, setTaskDone] = useState(false);

  const handleFill = (e) => {
   if(e.target.matches("p")){
    setTaskDone(!taskDone);
   }
  };
  

  return (
    <>
      <div onClick={handleFill} className="mt-5 flex flex-col justify-center text-center items-center gap-2">
        {value.map((e) => {
          
          return (
            <>
              <div className="flex rounded-lg justify-between bg-blue-900 w-full px-5 py-2">
              <p   className={` capitalize ${taskDone ? "line-through" : ""}`}>
                {e}
              </p>
              <button onClick={() => deleted(e)}> <MdDelete />
              </button>
              </div>
            </>
          );
        })}
      </div>
    </>
  );
};

export default List;
