import { useState } from "react";
import { MyData } from "../Hooks/useData";


const ParentButton = ({children}) => {
    const [isClick,setIsClick] = useState(false)
    const handleClick = () =>{
        setIsClick(!isClick)
    }
    return (
        <>
            <MyData.Provider value={{isClick,handleClick}}>
                {children}
            </MyData.Provider>
        </>
    );
};

export default ParentButton;