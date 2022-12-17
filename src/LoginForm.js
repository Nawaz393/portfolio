import React, { useRef, useState } from "react";
import { motion } from "framer-motion";
import { Alert } from "react-bootstrap";
import axios from "axios";

import { left,right,top,bottom,exitAnime } from "./Anime";
function LoginForm() {
  const [suceess, setsuccess] = useState(false);
  const [show, setshow] = useState(false);
  const [data,setdata]=useState("")
  const UserName = useRef();
  const password = useRef();

  const Login = async(e) => {
    e.preventDefault();


   const logindata={
UserName:UserName.current.value,
password:password.current.value,

   }
  try {
    const res= await axios.post("http://localhost:5001/login", logindata);
    if(!res.data.success){

      setsuccess(false);
      setdata(res.data.message);
      setshow(true);
  }
  else{
    setsuccess(false);
    setdata(res.data.message);
    setshow(true);

  }
  } catch (error) {
    
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
              required
              minLength={5}
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
              required
              animate="visible"
              placeholder="password"
              type={"password"}
              minLength={8}
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