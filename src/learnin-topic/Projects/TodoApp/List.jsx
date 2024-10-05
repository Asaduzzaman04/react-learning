import { useState } from "react";


const List = ({value}) => {
    
    const [taskDone , setTaskDone] = useState(false)
   
    const handleFill = () => {
        setTaskDone(!taskDone)
    
      
    }

    return (
        <>
        <div onClick={handleFill} >
            {
                value.map((e, i) => {
                    return (
                        <>
                        <p id={i} className={`border ${taskDone ? "line-through" : ""}`}>{e}</p>
                        </>
                    )
                })
            }
        </div>
            
        </>
    );
};

export default List;