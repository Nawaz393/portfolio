import React, { useRef, useState } from "react";
import { motion } from "framer-motion";
import { Alert } from "react-bootstrap";
import axios from "axios";

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
};
const right = {
  hidden: {
    x: "100vw",
  },
  visible: {
    x: 0,
    transition: {
      delay: 0.8,
      duration: 2,
    },
  },
};

const top = {
  hidden: {
    y: "-100vh",
  },
  visible: {
    y: 0,
    transition: {
      delay: 0.8,
      duration: 2,
    },
  },

  hover: {
    scale: [null, 1.2, 1.1],
    transition: {
      delay: 0.2,
      duration: 1,
    },
  },
};

const bottom = {
  hidden: {
    y: "100vh",
  },
  visible: {
    y: 0,
    transition: {
      delay: 0.5,
      duration: 1.5,
    },
  },
  hover: {
    scale: 1.05,
    transition: {
      yoyo: Infinity,
      duration: 0.5,
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
function LoginForm() {
  const [suceess, setsuccess] = useState(false);
  const [show, setshow] = useState(false);
  const [data,setdata]=useState({})
  const UserName = useRef();
  const password = useRef();

  const Login = (e) => {
    e.preventDefault();
   if(UserName.current.value!=6 || password.current.value!=8){

    setsuccess(false);
    setdata("userName Must be greater than  5 and password must b greater than 8")
    setshow(true);
    return;
   }

   const logindata={
UserName:UserName.current.value,
password:password.current.value,

   }
   const res=axios.post("http://localhost:5001/login", {logindata});


    if(!res.suceess){

        setsuccess(false);
        setdata(res.message);
        setshow(true);
    }

   

   
    

  };
  return (
    <motion.div className="min-h-screen " variants={exitAnime} exit="exit">
      <form  onSubmit={Login}>
        <div className="my-32 px-20">
        
          <motion.h4
            className="text-gray-400 text-center capitalize pb-3  font-Nerko"
            variants={top}
            initial="hidden"
            animate="visible"
            whileHover="hover"
          >
            Login{" "}
          </motion.h4>

          <div className="grid  lg:px-60 gap-x-2 gap-y-4 ">
            <div className="sm:col-span-2">
              {show && (
                <Alert
                  variant={suceess ? "success" : "danger"}
                  onClose={() => setshow(false)}
                  dismissible
                >
                  <Alert.Heading>
                    {suceess ? "successfull" : "failed"}
                  </Alert.Heading>
                  <p>
                    {data}
                  </p>
                </Alert>
              )}
            </div>
            <motion.input
              variants={left}
              initial="hidden"
              animate="visible"
              minLength={"5"}
              placeholder="Username"
              ref={UserName}
              name="UserName"
              autoComplete="none"
              className="rounded-lg py-2 px-3 hover:bg-gray-100  focus:outline-blue-300 border-none   "
            />

            <motion.input
              variants={right}
              initial="hidden"
              ref={password}
              animate="visible"
              placeholder="password"
              type={"password"}
              name="password"
              autoComplete="none"
              className="rounded-lg py-2 px-3 hover:bg-gray-100  focus:outline-blue-300 border-none   "
            />

            <motion.button
              className="sm:col-span-2 h-10 border-gray-400  border-2 rounded-lg text-gray-400 capitalize font-Nunito font-bold "
              variants={bottom}
              initial="hidden"
              animate="visible"
              whileHover="hover"
            >
              Login
            </motion.button>
          </div>
        </div>
      </form>
      
    </motion.div>
  );
}

export default LoginForm;
