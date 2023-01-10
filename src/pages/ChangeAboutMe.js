import { top, bottom, left, exitAnime } from "./Anime";
import React, { useState, useRef, useEffect } from "react";
import { motion } from "framer-motion";
import axios from "axios";
import { Alert } from "react-bootstrap";
import Sidebar from "../components/Sidebar";
import useAuth from "../hooks/useAuth";
const ChangeAboutMe = () => {
  const [suceess, setsuccess] = useState(false);
  const [show, setshow] = useState(false);
  const [data, setdata] = useState("");
  const [update, setupdate] = useState(false);
  const about = useRef();
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
  
        if (res.data.length > 0) {
          setupdate(true);
        }
      } catch (error) {
        setsuccess(false);
        setdata(error.message);
        setshow(true);
      }
 
    })();
  }, [state]);

  const ChangeAboutMe = async (e) => {
    e.preventDefault();

    const aboutmedata = {
      text: about.current.value,
    };

    let res;
    if (update) {
      res = await axios.put("/aboutme", aboutmedata, {
        headers: {
          Authorization: `Bearer ${state.token}`,
        },
      });
    } else {
      res = await axios.post("/aboutme", aboutmedata, {
        headers: {
          Authorization: `Bearer ${state.token}`,
        },
      });
    }
    if (!res.data.success) {
      setsuccess(false);
      setdata(res.data.message);
      setshow(true);
    } else {
      setsuccess(true);
      setdata(res.data.message);
      setshow(true);
    }
    e.target.reset();
  };
  return (
    <motion.div className="min-h-screen flex " variants={exitAnime} exit="exit">
      <Sidebar />

      <form onSubmit={ChangeAboutMe} className=" w-10/12  ml-2">
        <div className="my-32 px-20">
          <motion.h4
            className="text-gray-400 text-center capitalize pb-3  font-Nerko"
            variants={top}
            initial="hidden"
            animate="visible"
            whileHover="hover"
          >
            {update ? "Update AboutMe" : "Add AboutMe"}
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
            <motion.textarea
              variants={left}
              initial="hidden"
              animate="visible"
              minLength={50}
              placeholder="about"
              required
              ref={about}
              name="about"
              autoComplete="none"
              className="rounded-lg py-2 sm:col-span-2 px-3 hover:bg-gray-100  focus:outline-blue-300 border-none   "
            />

            <motion.button
              className="sm:col-span-2 h-10 border-gray-400  border-2 rounded-lg text-gray-400 capitalize font-Nunito font-bold "
              variants={bottom}
              initial="hidden"
              animate="visible"
              whileHover="hover"
            >
              {!update ? "Add AboutMe" : "Update AboutMe"}
            </motion.button>
          </div>
        </div>
      </form>
    </motion.div>
  );
};

export default ChangeAboutMe;
