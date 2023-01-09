import React, { useState, useRef,useEffect } from "react";
import { motion } from "framer-motion";
import { Alert } from "react-bootstrap";
import axios from "axios";
import Sidebar from "../components/Sidebar";
import {useNavigate} from "react-router-dom"
import { left, right, bottom, top, exitAnime } from "./Anime";
import useAuth from "../hooks/useAuth";
import CAlert from "../components/Alert";
const Addprojects = () => {
  const [suceess, setsuccess] = useState(false);
  const [show, setshow] = useState(false);
  const [data, setdata] = useState({});
  const name = useRef();
  const image = useRef();
  const link = useRef();
  const detail = useRef();
  const [unauth,setUnauth]=useState(false)
  const navigate=useNavigate()

const {state}=useAuth()

useEffect(() => {

if(state.role.toLowerCase()!="admin"){
  setUnauth(true);
}else{

  setUnauth(false)
}


},[state])
  const AddProject = async (e) => {
    e.preventDefault();

    const projectdata = {
      name: name.current.value,
      image: image.current.value,
      link: link.current.value,
      detail: detail.current.value,
    };



  
    try {
      const res = await axios.post("/project",projectdata, {headers:{

        "Authorization":`Bearer ${state.token}`
      }}

   
      );

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

      <form onSubmit={AddProject} className=" w-10/12  ml-2">
        <div className="my-32 px-20">
          <motion.h4
            className="text-gray-400 text-center capitalize pb-3  font-Nerko"
            variants={top}
            initial="hidden"
            animate="visible"
            whileHover="hover"
          >
            Add New Project{" "}
          </motion.h4>
          { unauth &&  <CAlert variant="danger"  heading="Unauthorized"  text="you are unathorized to use this page"  />}

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
              ref={name}
              name="name"
              autoComplete="none"
              className="rounded-lg py-2 px-3 hover:bg-gray-100  focus:outline-blue-300 border-none   "
            />

            <motion.input
              variants={right}
              initial="hidden"
              ref={image}
              required
              minLength={10}
              animate="visible"
              placeholder="image"
              type={"text"}
              name="image"
              autoComplete="none"
              className="rounded-lg py-2 px-3 hover:bg-gray-100  focus:outline-blue-300 border-none   "
            />
            <motion.input
              variants={left}
              initial="hidden"
              ref={link}
              animate="visible"
              required
              minLength={10}
              placeholder="link"
              type={"text"}
              name="link"
              autoComplete="none"
              className="rounded-lg py-2 px-3 hover:bg-gray-100  focus:outline-blue-300 border-none   "
            />
            <motion.input
              variants={left}
              initial="hidden"
              ref={detail}
              minLength={10}
              required
              animate="visible"
              placeholder="detail"
              type={"text"}
              name="detail"
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
              Add project
            </motion.button>
          </div>
        </div>
      </form>
    </motion.div>
  );
};

export default Addprojects;
