import { MdDelete } from "react-icons/md";
import { FcOk } from "react-icons/fc";



/* eslint-disable react/prop-types */

const List = ({ value,handelDeleteList,check,setCheck }) => {
 
  const handleComplete =  () => {
    
  }

  
  return (
    <>
      <div
        
        className="mt-5 flex flex-col justify-center text-center items-center gap-2"
      >

              <div  className="flex rounded-lg justify-between bg-blue-900 w-full px-5 py-2">
                <button onClick={() =>handleComplete(value)}>
                  <FcOk/>
                </button>
                <p className={` capitalize ${check ? "line-through" : ""}`}>
                  {value}
                </p>
                <button onClick={() => handelDeleteList(value)}>
                  {" "}
                  <MdDelete />
                </button>
              </div>
      </div>
    </>
  );
};

export default List;
