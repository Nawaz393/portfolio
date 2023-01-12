import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import axios from "axios";
import useAuth from "../hooks/useAuth";
import Loading from "../components/loading";
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
  hover: {
    scale: [null, 1.5, 1.1],
    transition: {
      duration: 2,
    },
  },
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
  const [aboutme, setaboutme] = useState("");
  const [loading, setloading] = useState(true);
  const { state } = useAuth();
  useEffect(() => {
    (async () => {

      try {
        const res = await axios.get(
          `${process.env.REACT_APP_Backened_url}/aboutme`,
          {
            headers: {
              Authorization: `Bearer ${state.token}`,
            },
          }
        );

        if(res){

          setloading(false);
        }
        if (res.data.length > 0) {
          setaboutme(res.data[0].text);
        } else {
          setaboutme(res.data.message);
        }
        
      } catch (error) {
        
        
      }
   
    })();
  }, [state]);

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
        {loading ? (<Loading/>):(
        <motion.p
          className="text-gray-300 text-lg tracking-tighter px-4 font-Nunito text-semibold"
          variants={right}
          initial="hidden"
          animate="visible"
        >
          {aboutme}
        </motion.p>)}
      </div>
    </motion.div>
  );
}

export default Aboutme;
