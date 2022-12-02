import React from "react";
import { motion } from "framer-motion";
const exitAnime = {
  exit: {
    y: "-100vh",
    transition: {
      duration: 1,
      ease: "easeInOut",
    },
  },
};

const left = {
  hidden: {
    x: "-100vw",
  },

  visible: {
    x: 0,
    transition: {
      delay: 0.5,
      duration: 1.5,
    },
  },
  hover:{

    scale:[null,1.5,1.1],
    transition:{
        
        duration:2
    }
  }
};

const right = {
  hidden: {
    x: "100vw",
  },
  visible: {
    x: 0,
    transition: {
      delay: 0.8,
      duration: 1.5,
    },
  },
};
function Aboutme() {
  return (
    <motion.div className="min-h-screen" variants={exitAnime} exit="exit">
      <div className="flex flex-col mt-28">
        <motion.h2
          className="text-gray-100 font-Nerko text-center py-2"
          variants={left}
          initial="hidden"
          animate="visible"
          whileHover="hover"
        >
          About Me
        </motion.h2>
        <motion.p
          className="text-gray-300 text-lg tracking-tighter px-4 font-Nunito text-semibold"
          variants={right}
          initial="hidden"
          animate="visible"
        >
          I am a student of software engineering, currently enrolled in a
          four-year degree program. I am passionate about technology and have
          been since I was a young child. I have always had a strong interest in
          computer programming and software design, and I am determined to
          pursue a career in the field. I have a strong work ethic, and I am
          dedicated to learning new skills and techniques in order to stay
          up-to-date with the latest advances in software engineering. I have a
          keen eye for detail and take great pride in the quality of my work. I
          am an excellent problem solver, able to think critically and logically
          to solve difficult challenges. I am confident that I have the
          knowledge and skills to succeed.
        </motion.p>
      </div>
    </motion.div>
  );
}

export default Aboutme;
