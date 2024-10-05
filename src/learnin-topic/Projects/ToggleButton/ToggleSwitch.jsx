import { useState } from "react";


const ToggleSwitch = () => {

const [on, setOn] = useState(false)
    const handleToggle = () => {
        setOn(!on)
    }

  return (
    <>
      <div onClick={handleToggle} className={`container  rounded-full  p-5 w-[17%] ${on ? "bg-green-600" : "bg-red-600"} `}>
            <div className={`switch border-4 transition-all duration-300 ease-linear border-white w-fit p-10 rounded-full ${on ? "bg-green-600 translate-x-40" : "bg-red-600 translate-x-0"}`}>
                <span  className="font-bold uppercase">{on ? "on" : "off"}</span>
            </div>
      </div>
    </>
  );
};

export default ToggleSwitch;
