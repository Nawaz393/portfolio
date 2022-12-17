import React from "react";
import { motion } from "framer-motion";
import myimg from "./pics/myimg.JPG";

const nameAnime = {
  hidden: {
    x: "-100vw",
  },
  visible: {
    x: 0,
    transition: {
      delay: 0.5,
      duration: 2,
    },
  },

  hover: {
    scale: [null,1.2,1.06],
 

    transition: {
      delay:0.5,
      duration:2,
    },
  },
};


const paraAnime = {
  hidden: {
    x: "100vw",
  },
  visible: {
    x: 0,
    transition: {
      delay: 0.9,
      duration: 2,
    },
  },
};

const imgAnime = {
  hidden: {
    y: "100vw",
  },
  visible: {
    y: 0,
    transition: {
      delay: 0.7,
      duration: 2,
    },
   
  },
  hover: {
    scale: [null, 1.2, 1.1],

    transition: {
      duration: 1.2,
    },
  },
};

const exitAnime={


  exit:{


    y:"-100vh",
    transition:{


      duration:1,
      ease:"easeInOut"
    }
  }
}
function Name() {
  return (
  <motion.div className="  min-h-screen bg-gray-800 flex justify-center items-center"
    variants={exitAnime}
    exit="exit"
    >
    <div className="flex justify-center flex-col items-center h-3/4 "
    
    
    >
      <motion.h1
        className="text-gray-200 text-4xl font-Nerko tracking-tighter "
        variants={nameAnime}
        initial="hidden"
        animate="visible"
        whileHover="hover"
      >
        Muhammad Nawaz khan{" "}
      </motion.h1>
      <motion.img
        src={myimg}
        className=" rounded-xl  bg-yellow-100 mt-5 h-2/4 sm:w-1/3 w-4/6"
        alt="not"
        variants={imgAnime}
        initial="hidden"
        animate="visible"
        whileHover="hover"
      />
      <motion.h5
        className="text-white  text-lg tracking-tighter font-Nunito mt-5 "
        variants={paraAnime}
        initial="hidden"
        animate="visible"
        whileHover="hover"
      >
        Talk is cheap. Show me the code.
      </motion.h5>
    </div>
    </motion.div>
  );
}

export default Name;