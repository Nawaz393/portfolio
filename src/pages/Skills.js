import React from "react";

import { motion } from "framer-motion";
import axios from "axios";
import useAuth from "../hooks/useAuth";
const image1 = {
  visible: {
    rotateY: 360,
    opacity: 0,
    transition: {
      ease: "linear",

      repeat: Infinity,
      delay: 1,
      duration: 10,
    },
  },
};
const image2 = {
  visible: {
    rotateY: 360,
    opacity: 0,
    transition: {
      ease: "linear",

      repeat: Infinity,
      delay: 11,
      duration: 10,
    },
  },
};
const image3 = {
  visible: {
    opacity: 0,
    rotateY: 360,
    transition: {
      ease: "linear",

      repeat: Infinity,
      delay: 13,
      duration: 10,
    },
  },
};

const text = {
  hidden: {
    y: "-100vw",
  },

  visible: {
    y: 0,
    transition: {
      type: "spring",
      stippness: 10,
      delay: 0.5,
      duration: 2,
    },
  },
};

const htext = {
  hidden: {
    x: "-100vw",
  },

  visible: {
    x: 0,
    transition: {
      delay: 0.5,
      duration: 2,
    },
    hover: {
      scale: 1.1,
      transition: {
        duration: 1,
      },
    },
  },
};
const exitAnime = {
  exit: {
    y: "-100vh",
    transition: {
      duration: 1,
      ease: "easeInOut",
    },
  },
};
const hotext = {
  hover: {
    scale: [null, 1.3, 1.1],
    transition: {
      duration: 1.5,
    },
  },
};
const imagesAnime = {
  hidden: {
    opacity: 0,
  },

  visible: {
    opacity: 1,
    transition: {
      delay: 3,
      duration: 2,
    },
  },
};

function Skills() {
  const [allskills, setAllSkills] = React.useState();
  const {state}=useAuth();
  React.useEffect(() => {
    (async () => {
      const res = await axios.get("/skills",{headers:{
        "Authorization":`Bearer ${state.token}`
      }});
   
      const data = res.data;

      setAllSkills(data);
      // try {

      //   const res =await fetch("/skills");
      //   setAllSkills(await res.json());
      // } catch (error) {

      // }
    })();
  }, []);

  return (
    <motion.div
      className="min-h-screen py-10 pb-10 place-content-center"
      variants={exitAnime}
      exit="exit"
    >
      <motion.div
        className="flex justify-center py-14 "
        variants={htext}
        initial="hidden"
        animate="visible"
      >
        <motion.h2
          className="text-gray-500 font-Nerko place-content-center  "
          variants={hotext}
          whileHover="hover"
        >
          The skills i have{" "}
        </motion.h2>
      </motion.div>
      <div className="h-full flex items-center justify-center ">
      <div
        className="grid md:grid-cols-3 
      sm:grid-cols-2 grid-cols-1  sm:gap-y-48 sm:gap-x-64 gap-y-72 sm:pb-16"
      >
        {allskills?.map((skill) => {
          return (
            <div
              className="  flex flex-col justify-evenly items-start "
              key={skill.id}
            >
              <motion.div
                className=""
                variants={text}
                initial="hidden"
                animate="visible"
              >
                {" "}
                <motion.h5
                  className="text-gray-300  sm:text-sm text-xs tracking-tighter font-Nunito   capitalize pl-7 pb-3"
                  variants={hotext}
                  whileHover="hover"
                >
                  {skill.name}
                </motion.h5>
              </motion.div>

              <motion.div
                variants={imagesAnime}
                initial="hidden"
                animate="visible"
              >
                <div className="px-3 ">
                  {" "}
                  <motion.img
                    variants={image3}
                    animate="visible"
                    src={skill.image1}
                    alt="not found"
                    className=" sm:h-1/4 sm:w-1/6 h-1/5 w-1/4 absolute shadow-lg shadow-white rounded-xl bg-white"
                  ></motion.img>
                  <motion.img
                    variants={image2}
                    animate="visible"
                    src={skill.image2}
                    alt="not found"
                    className=" sm:h-1/4 sm:w-1/6 h-1/5 w-1/4 absolute shadow-xl shadow-gray-600 rounded-xl bg-white"
                  />
                  <motion.img
                    variants={image1}
                    animate="visible"
                    src={skill.image3}
                    alt="not found"
                    className="sm:h-1/4 sm:w-1/6  h-1/5 w-1/4 absolute shadow-xl shadow-black rounded-xl bg-white"
                  />
                </div>
                
              </motion.div>
            </div>
          );
        })}
        <div></div>
      </div>
      </div>
    </motion.div>
  );
}

export default Skills;
