import React, { useState, useRef, useEffect } from "react";
import { motion } from "framer-motion";
import { Alert } from "react-bootstrap";
import axios from "axios";

import Sidebar from "../components/Sidebar";
import { left, right, top, bottom, exitAnime } from "./Anime";
import useAuth from "../hooks/useAuth";
import CAlert from "../components/Alert";

const UserReg = () => {
  const [suceess, setsuccess] = useState(false);
  const [show, setshow] = useState(false);
  const [data, setdata] = useState({});
  const UserName = useRef();
  const password = useRef();
  const email = useRef();
  const role = useRef();
  const [unauth, setUnauth] = useState(false);
  const { state } = useAuth();
  useEffect(() => {
    if (state.role.toLowerCase() !== "admin") {
      setUnauth(true);
    } else {
      setUnauth(false);
    }
  }, [state]);
  const Register = async (e) => {
    e.preventDefault();
    const registerdata = {
      userName: UserName.current.value,
      email: email.current.value,
      password: password.current.value,
      role: role.current.value,
    };
    try {
      const res = await axios.post(
        `${process.env.REACT_APP_Backened_url}/register`,
        registerdata,
        {
          headers: {
            Authorization: `Bearer ${state.token}`,
          },
        }
      );
      if (!res.data.success) {
        setsuccess(false);
        setdata(res.data.message);
        setshow(true);
      } else {
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
          {unauth && (
            <CAlert
              variant="danger"
              heading="Unauthorized"
              text="you will not be able to add user"
            />
          )}

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
              variants={right}
              initial="hidden"
              ref={email}
              required
              minLength={10}
              animate="visible"
              placeholder="email"
              type={"email"}
              name="email"
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
              ref={role}
              minLength={5}
              required
              animate="visible"
              placeholder="Role"
              type={"text"}
              name="text"
              autoComplete="none"
              className="rounded-lg py-2 px-3 hover:bg-gray-100  focus:outline-blue-300 border-none   "
            />

            <motion.button
              className="sm:col-span-2 h-10 border-gray-400  border-2 rounded-lg text-gray-400 capitalize font-Nunito font-bold "
              variants={bottom}
              initial="hidden"
              animate="visible"
              whileHover="hover"
              disabled={unauth}
            >
              Register
            </motion.button>
          </div>
        </div>
      </form>
    </motion.div>
  );
};

export default UserReg;
