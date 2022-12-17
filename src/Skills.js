import React from "react";
import mysql from "./pics/mysql.png";
import sql from "./pics/sql.png";
import sql_server from "./pics/sql-server.png";
import html from "./pics/html.png";
import css from "./pics/css.png";
import javascript from "./pics/javacript.png";
import c from "./pics/c.png";
import java from "./pics/java.png";
import react from "./pics/React.png";
import tailwind from "./pics/tailwind.png";
import Bootstrap from "./pics/Bootstrap.png";
import { motion } from "framer-motion";

const image1 = {
  visible: {
    rotateY: 360,
    opacity: 0,
    transition: {
      ease: "linear",

      yoyo: Infinity,
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

      yoyo: Infinity,
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

      yoyo: Infinity,
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
      type:"spring",
      stippness:10,
      delay: 0.5,
      duration: 2,
    },
  },
};

const htext={


  hidden: {
    x: "-100vw",
  },

  visible: {
    x: 0,
    transition: {
      delay: 0.5,
      duration: 2,
    },
    hover:{


      scale:1.1,
      transition:{
        duration:1,
      }
    }
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
};
const hotext={


  hover:{


    scale:[null,1.3,1.1],
    transition:{


      
      duration:1.5
    }

  }
}
const imagesAnime={

  hidden: {
   opacity:0,
  },

  visible: {
  opacity:1,
    transition: {
      delay: 3,
      duration: 2,
    },
  },

};
const SkillSarr = [
  {
    name: "Databases",
    images: {
      image1: sql,
      image2: mysql,
      image3: sql_server,
    },
  },
  {
    name: "Front-End-techs",
    images: {
      image1: html,
      image2: css,
      image3: javascript,
    },
  },
  {
    name: "programming-languages",
    images: {
      image1: c,
      image2: java,
      image3: java,
    },
  },
  {
    name: "Front-End-Framworks",
    images: {
      image1: react,
      image2: Bootstrap,
      image3: tailwind,
    },
  },
];

const allskill = SkillSarr.map((skill) => {
  return (
    <div className="  flex flex-col justify-evenly items-start ">
      <motion.div className=""
      
      variants={text}
      initial="hidden"
      animate="visible"
      
      >
        {" "}
        <motion.h5 className="text-gray-300 sm:text-lg text-sm tracking-tighter font-Nunito font-semibold  uppercase px-5 py-2"
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
          src={skill.images.image1}
          alt="not found"
          className=" sm:h-1/4 sm:w-1/6 h-1/4 w-1/4 absolute shadow-lg shadow-white rounded-xl bg-white"
        ></motion.img>
        <motion.img
          variants={image2}
          animate="visible"
          src={skill.images.image2}
          alt="not found"
          className=" sm:h-1/4 sm:w-1/6 h-1/4 w-1/4 absolute shadow-xl shadow-gray-600 rounded-xl bg-white"
        />
        <motion.img
          variants={image1}
          animate="visible"
          src={skill.images.image3}
          alt="not found"
          className="sm:h-1/4 sm:w-1/6  h-1/4 w-1/4 absolute shadow-xl shadow-black rounded-xl bg-white"
        />
        </div>
      </motion.div>
    </div>
  );
});
function Skills() {
  return (
    <motion.div className="min-h-screen py-10 pb-10 place-content-center"
    
    variants={exitAnime}
    exit="exit"
    >
      <motion.div className="flex justify-center py-14 "
      
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

      <div className="grid md:grid-cols-3 
      sm:grid-cols-2 grid-cols-1  sm:gap-y-48 sm:gap-x-64 gap-y-72 pb-16  place-content-center sm:px-20 sm:pb-20 px-32">
        {allskill}
      <div></div>
      </div>
     
    </motion.div>
  );
}

export default Skills;
