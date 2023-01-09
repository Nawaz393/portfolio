import React, { useState, useRef } from "react";
import { motion } from "framer-motion";
import { Alert } from "react-bootstrap";
import axios from "axios";
import useAuth from "../src/hooks/useAuth"

import Sidebar from "./components/Sidebar";
import { left, right, top, bottom, exitAnime } from "./Anime";
import { useNavigate } from "react-router-dom";

const ChangePassword = () => {
  const [suceess, setsuccess] = useState(false);
  const [show, setshow] = useState(false);
  const [data, setdata] = useState({});
  const UserName = useRef();
  const password = useRef();
  const {state}=useAuth()
  const navigate=useNavigate()

  const npass = useRef();

  const Register = async (e) => {
    e.preventDefault();

    const updpassdata = {
      userName: UserName.current.value,
      password: password.current.value,
      npassword: npass.current.value,
     
    };

    try {
      const res = await axios.put("/register",updpassdata, {headers:{

        "Authorization":`Bearer ${state.token}`
      }});
      if (!res.data.success) {
        setsuccess(false);
        setdata(res.data.message);
        setshow(true);
      } else {
        localStorage.clear();
        navigate("/",{replace:true});
        setsuccess(true);
        setdata(res.data.message);
        setshow(true);
      }
    } catch (error) {
      setsuccess(false);
      setdata(error.message);
      setshow(true);
    }
  };
  return (
    <motion.div className="min-h-screen flex " variants={exitAnime} exit="exit">
      <Sidebar />

      <form onSubmit={Register} className="w-10/12 ml-2">
        <div className="my-32 px-20">
          <motion.h4
            className="text-gray-400 text-center capitalize pb-3  font-Nerko"
            variants={top}
            initial="hidden"
            animate="visible"
            whileHover="hover"
          >
            Register User{" "}
          </motion.h4>

          <div className="grid lg:px-36 gap-x-2 gap-y-4 ">
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
                  <p>{data} </p>
                </Alert>
              )}
            </div>
            <motion.input
              variants={left}
              initial="hidden"
              animate="visible"
              minLength={5}
              placeholder="Username"
              required
              ref={UserName}
              name="UserName"
              autoComplete="none"
              className="rounded-lg py-2 px-3 hover:bg-gray-100  focus:outline-blue-300 border-none   "
            />

            <motion.input
              variants={left}
              initial="hidden"
              ref={password}
              animate="visible"
              required
              minLength={8}
              placeholder="password"
              type={"password"}
              name="password"
              autoComplete="none"
              className="rounded-lg py-2 px-3 hover:bg-gray-100  focus:outline-blue-300 border-none   "
            />
            <motion.input
              variants={left}
              initial="hidden"
              ref={npass}
              minLength={8}
              required
              animate="visible"
              placeholder="New password"
              type={"text"}
              name="npass"
              autoComplete="none"
              className="rounded-lg py-2 px-3 hover:bg-gray-100  focus:outline-blue-300 border-none  sm:col-span-2  "
            />

            <motion.button
              className="sm:col-span-2 h-10 border-gray-400  border-2 rounded-lg text-gray-400 capitalize font-Nunito font-bold "
              variants={bottom}
              initial="hidden"
              animate="visible"
              whileHover="hover"
            >
              update password
            </motion.button>
          </div>
        </div>
      </form>
    </motion.div>
  );
};

export default ChangePassword;
