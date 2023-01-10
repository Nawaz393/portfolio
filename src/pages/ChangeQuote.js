import { top, bottom, left, exitAnime } from "./Anime";
import React, { useState, useRef } from "react";
import { motion } from "framer-motion";
import axios from "axios";
import { Alert } from "react-bootstrap";
import Sidebar from "../components/Sidebar";
import useAuth from "../hooks/useAuth";
const ChangeQuote = () => {
  const [suceess, setsuccess] = useState(false);
  const [show, setshow] = useState(false);
  const [data, setdata] = useState({});
  const Quote = useRef();
  const { state } = useAuth();
  const ChangeQuote = async (e) => {
    e.preventDefault();

    const quotedata = {
      Quote: Quote.current.value,
    };

    try {
      const res = await axios.put(
        `${process.env.REACT_APP_Backened_url}/Quote`,
        quotedata,
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
      e.target.reset();
    } catch (error) {
      setsuccess(false);
      setdata(error.message);
      setshow(true);
    }

  };
  return (
    <motion.div className="min-h-screen flex " variants={exitAnime} exit="exit">
      <Sidebar />

      <form onSubmit={ChangeQuote} className=" w-10/12  ml-2">
        <div className="my-32 px-20">
          <motion.h4
            className="text-gray-400 text-center capitalize pb-3  font-Nerko"
            variants={top}
            initial="hidden"
            animate="visible"
            whileHover="hover"
          >
            Change Quote{" "}
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
              placeholder="Quote"
              required
              ref={Quote}
              name="Quote"
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
              Change Quote
            </motion.button>
          </div>
        </div>
      </form>
    </motion.div>
  );
};

export default ChangeQuote;
