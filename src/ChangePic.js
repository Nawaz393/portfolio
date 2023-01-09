import { top, bottom, left, exitAnime } from "./Anime";
import React, { useState, useRef, useEffect } from "react";
import { motion } from "framer-motion";
import axios from "axios";
import { Alert } from "react-bootstrap";
import Sidebar from "./components/Sidebar";
import useAuth from "./hooks/useAuth";
const ChangePic = () => {
  const [suceess, setsuccess] = useState(false);
  const [show, setshow] = useState(false);
  const [data, setdata] = useState({});
  const { state } = useAuth();

  const [upload, setUpload] = useState(false);

  useEffect(() => {
    (async () => {
      const img = await axios.get("/myimage", {
        headers: {
          Authorization: `Bearer ${state.token}`,
        },
      });


      console.log(img.data)
      if (img.data.length>0) {
        setUpload(false);
      } else {
        setUpload(true);
      }
    })();
  }, [state]);

  const image = useRef();

  const AddImage = async (e) => {
    e.preventDefault();

    const imagedata = {
      image: image.current.value,
    };

    let res;
    if (upload) {
      res = await axios.post("/myimage", imagedata, {
        headers: {
          Authorization: `Bearer ${state.token}`,
        },
      });
    } else {
      res = await axios.put("/myimage",imagedata,  {
       
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

      <form onSubmit={AddImage} className=" w-10/12  ml-2">
        <div className="my-32 px-20">
          <motion.h4
            className="text-gray-400 text-center capitalize pb-3  font-Nerko"
            variants={top}
            initial="hidden"
            animate="visible"
            whileHover="hover"
          >
            Change Picture{" "}
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
              placeholder="image"
              required
              ref={image}
              name="image"
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
              {!upload ? "Change Pic" : "Upload pic"}
            </motion.button>
          </div>
        </div>
      </form>
    </motion.div>
  );
};

export default ChangePic;
