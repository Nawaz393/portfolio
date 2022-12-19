import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { Alert } from "react-bootstrap";
import axios from "axios";
import { Card } from "react-bootstrap";
import { Button } from "react-bootstrap";
import Sidebar from "./Sidebar";
import { left, right, bottom, top } from "./Anime";

const nameAnime = {
  hidden: {
    x: "-100vw",
  },
  visible: {
    x: 0,
    transition: {
      delay: 0.5,
      duration: 2,
    },
  },

  hover: {
    scale: [null, 1.1, 1.06],

    transition: {
      delay: 0.1,
      duration: 2,
    },
  },
};

const CardAnime = {
  hidden: {
    y: "100vw",
  },
  visible: {
    y: 0,
    transition: {
      delay: 0.7,
      duration: 2,
    },
  },
  hover: {
    scale: [null, 1.1, 1.05],

    transition: {
      duration: 1.2,
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
const UpdDelSkill = () => {
  const [suceess, setsuccess] = useState(false);
  const [show, setshow] = useState(false);
  const [data, setdata] = useState({});
  const [Delete,setDelete]=useState(false);
  const [formval, setFormval] = useState({
    id: 0,
    name: "",
    image1: "",
    image2: "",
    image3: "",
  });
  const [skills, setSkills] = useState([]);
  const [update, setupdate] = useState(false);

  useEffect(() => {
    (async () => {
      const res = await axios.get("/skills");
      setSkills(res.data);
    })();
  }, [Delete]);

  const handelchange = (e) => {
    setFormval({ ...formval, [e.target.name]: e.target.value });
  };
  const handleSubmit = async (e) => {
    e.preventDefault();

    const res = await axios.put("/skills", formval);

    if (res.data.success) {
      setshow(true);
      setsuccess(true);
      setdata(res.data.message);
    } else {
      setshow(true);
      setsuccess(false);
      setdata(res.data.message);
    }

    e.target.reset();
  };

  const clickupdate = (id) => {
    const skill = skills.find((item) => item.id === id);
    setFormval(skill);
  };

  const clickDelete =  async(id) => {

const data={id:id};
console.log(data);
  const res = await axios.delete("/skills",{data} );
 setDelete(!Delete);
}
  const cards = skills?.map((item, index) => {
    return (
      <motion.div
        variants={CardAnime}
        initial="hidden"
        animate="visible"
        whileHover="hover"
        key={index}
        className=" w-1/3  sm:w-3/4   "
      >
        <Card bg="dark" text="light">
          <Card.Header as="h5">{item.name}</Card.Header>
          <Card.Body>
            <Card.Text>{item.image1}</Card.Text>
            <Card.Text>{item.image1}</Card.Text>
            <Card.Text>{item.image1}</Card.Text>

            <div className="my-3 ">
              <span className="sm:mx-5 p-2">
                <Button
                  variant="primary"
                  onClick={() => {
                    clickupdate(item.id);

                    setupdate(true);
                  }}
                >
                  Update
                </Button>
              </span>

              <span className="sm:mx-5 p-2">
                <Button variant="danger"
                
                onClick={()=>clickDelete(item.id)}
                >Delete</Button>
              </span>
            </div>
          </Card.Body>
        </Card>
      </motion.div>
    );
  });

  return (
    <motion.div
      className=" flex flex-row items-start text-center min-h-screen"
      variants={exitAnime}
      exit="exit"
    >
      <div>
        <Sidebar />
      </div>

      <div className=" mt-10  text-center py-1 px-10 w-full  lg:ml-48">
        <motion.h1
          className="text-slate-400 font-Nerko md:pr-28 font-semibold "
          variants={nameAnime}
          initial="hidden"
          animate="visible"
          whileHover="hover"
        >
          Update and  Delete Skills
        </motion.h1>

        <main className=" ">
          {!update ? (
            <div className="grid grid-col-1  py-3 text-sm  gap-y-3  ">
              {cards}
            </div>
          ) : (
            <motion.div
              className="md:-ml-44  "
              variants={exitAnime}
              exit="exit"
            >
              <form onSubmit={handleSubmit} className=" ">
                <div className="">
                  <motion.h4
                    className="text-gray-400 text-center capitalize pb-3  font-Nerko"
                    variants={top}
                    initial="hidden"
                    animate="visible"
                    whileHover="hover"
                  >
                    Update Skill{" "}
                  </motion.h4>

                  <div className="grid lg:px-36 gap-x-2 gap-y-4 ">
                    <div className="sm:col-span-2">
                      {show && (
                        <Alert
                          variant={suceess ? "success" : "danger"}
                          onClose={() => {setshow(false)
                          setupdate(false)}
                          
                          }
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
                      onChange={(e) => {handelchange(e)}}
                      value={formval.name}
                      name="Name"
                      autoComplete="none"
                      className="rounded-lg py-2 px-3 hover:bg-gray-100  focus:outline-blue-300 border-none   "
                    />

                    <motion.input
                      variants={right}
                      initial="hidden"
                      value={formval.image1}
                      required
                      onChange={(e) => {handelchange(e)}}
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
                      value={formval.image2}
                      animate="visible"
                      required
                      onChange={(e) => {handelchange(e)}}
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
                      value={formval.image3}
                      minLength={10}
                      onChange={(e) => {handelchange(e)}}
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
                      Update Skill
                    </motion.button>
                  </div>
                </div>
              </form>
            </motion.div>
          )}
        </main>
      </div>
    </motion.div>
  );
};

export default UpdDelSkill;
