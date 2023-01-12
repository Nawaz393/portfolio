import React from "react";
import { motion } from "framer-motion";

const loading = {
  load: {
    y: "5vh",
    x:["-5vw","5vw","-5vw"],
    transition: {

            delay:0.2,
        repeat: Infinity,
       
    }
    
  },
};
const Loading = () => {
  return (
    <div className=" h-1/4 w-1/4 flex items-center justify-center ">
      <motion.div
        className="text-white  bg-white h-2 w-2 rounded-full"
        variants={loading}
        animate="load"
      ></motion.div>
    </div>
  );
};

export default Loading;
