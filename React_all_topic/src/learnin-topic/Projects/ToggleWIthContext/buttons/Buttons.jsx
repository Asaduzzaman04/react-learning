import { useRef } from "react";
import useHooks from "../Hooks/useHooks";
import { motion } from "framer-motion";

const Buttons = () => {
  const { isClick, handleClick } = useHooks();


  return (
    <div 
      className={`w-28 rounded-3xl h-14 flex justify-start items-center  shadow-[0px_0px_2px_#dfdfdf]  ${
        isClick ? "bg-white" : "bg-black"
      }`}
      onClick={handleClick}
    >
      <motion.button
        className={`w-10 h-10  rounded-full ${
          isClick ? "bg-black" : "bg-white"
        }`}
        animate={isClick ? { x: 65 ,shadow: '0px 10px 10px blue'} : { x: 10 }}
        transition={{ duration: 0.7 }}
        whileTap={ isClick && {scale : 1.1}}
      ></motion.button>
    </div>
  );
};

export default Buttons;
