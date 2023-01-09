import React, { useState, useRef } from "react";
import { motion } from "framer-motion";
import { Alert } from "react-bootstrap";
import axios from "axios";
import Sidebar from "./components/Sidebar";
import { left, right, bottom, top, exitAnime } from "./Anime";
import useAuth from "./hooks/useAuth";
const AddSkills = () => {
  const [suceess, setsuccess] = useState(false);
  const [show, setshow] = useState(false);
  const [data, setdata] = useState({});
  const Name = useRef();
  const image1 = useRef();
  const image2 = useRef();
  const image3 = useRef();
  const{state}=useAuth()

  const AddSkill = async (e) => {
    e.preventDefault();

    const skilldata = {
      name: Name.current.value,
      image1: image1.current.value,
      image2: image2.current.value,
      image3: image3.current.value,
    };

    console.log(skilldata);
    try {
      const res = await axios.post("/skills",skilldata, {headers:{

        "Authorization":`Bearer ${state.token}`
      }});

      console.log(res.data);
      if (res.data.success) {
        setsuccess(true);
        setdata(res.data.message);
        setshow(true);
      } else {
        setsuccess(false);
        setdata(res.data.message);
        setshow(true);
      }
    } catch (error) {
      setsuccess(false);
      setdata(error.message);
      setshow(true);
    }
    e.target.reset();
  };
  return (
    <motion.div className="min-h-screen flex " variants={exitAnime} exit="exit">
      <Sidebar />

      <form onSubmit={AddSkill} className=" w-10/12  ml-2">
        <div className="my-32 px-20">
          <motion.h4
            className="text-gray-400 text-center capitalize pb-3  font-Nerko"
            variants={top}
            initial="hidden"
            animate="visible"
            whileHover="hover"
          >
            Add New Skill{" "}
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
              minLength={3}
              placeholder="Name"
              required
              ref={Name}
              name="Name"
              autoComplete="none"
              className="rounded-lg py-2 px-3 hover:bg-gray-100  focus:outline-blue-300 border-none   "
            />

            <motion.input
              variants={right}
              initial="hidden"
              ref={image1}
              required
              minLength={10}
              animate="visible"
              placeholder="image1"
              type={"text"}
              name="image1"
              autoComplete="none"
              className="rounded-lg py-2 px-3 hover:bg-gray-100  focus:outline-blue-300 border-none   "
            />
            <motion.input
              variants={left}
              initial="hidden"
              ref={image2}
              animate="visible"
              required
              minLength={10}
              placeholder="image2"
              type={"text"}
              name="image2"
              autoComplete="none"
              className="rounded-lg py-2 px-3 hover:bg-gray-100  focus:outline-blue-300 border-none   "
            />
            <motion.input
              variants={left}
              initial="hidden"
              ref={image3}
              minLength={10}
              required
              animate="visible"
              placeholder="image3"
              type={"text"}
              name="image3"
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
              AddSkill
            </motion.button>
          </div>
        </div>
      </form>
    </motion.div>
  );
};

export default AddSkills;
