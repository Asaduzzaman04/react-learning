import { FcGoogle } from "react-icons/fc";
import { IoLogoGithub } from "react-icons/io5";
import { FaXTwitter } from "react-icons/fa6";
import { LuInstagram } from "react-icons/lu";

const Reacticon = () => {
  return (
    <>
      <div className="text-6xl flex gap-5">
        <FcGoogle />
        <IoLogoGithub/>
        <FaXTwitter/>
        <LuInstagram/>
      </div>
    </>
  );
};

export default Reacticon;
