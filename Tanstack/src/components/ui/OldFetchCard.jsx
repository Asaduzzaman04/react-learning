import { motion } from "framer-motion";
const OldFetchCard = ({ data, delay }) => {
  return (
    <>
      <motion.li
        initial={{ y: -20 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.5, delay: delay / 20 }}
        className=" overflow-hidden transition-all duration-100 ease-linear hover:shadow-[0_20px_50px_rgba(255,_255,_255,_0.7)]  px-3 py-2 rounded-lg bg-white text-black h-full "
      >
        <div className="flex flex-col gap-5 font-semibold ">
          <p>{data.id}</p>
          <div className="flex flex-col gap-2">
            <motion.h2
              initial={{ opacity: 0, y: -100 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: delay / 20 }}
              className="capitalize "
            >
              {" "}
              title: {data.title}
            </motion.h2>
            <motion.p
              initial={{ opacity: 0, y: -100 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: delay / 15 }}
            >
              {data.body}
            </motion.p>
          </div>
        </div>
      </motion.li>
    </>
  );
};

export default OldFetchCard;
