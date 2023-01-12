import React, { useState, useEffect } from "react";
import { imgAnime, exitAnime, bottom, top } from "./Anime";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Card } from "react-bootstrap";
import { faLink } from "@fortawesome/free-solid-svg-icons";
import { motion } from "framer-motion";
import axios from "axios";
import useAuth from "../hooks/useAuth";
import Loading from "../components/loading";

const Project = () => {
  const [error, setError] = useState("");
  const [projects, setProjects] = useState([]);
  const { state } = useAuth();
  const [loading,setloading]=useState(true);


  useEffect(() => {
    (async () => {
      try {
        const res = await axios.get(`${process.env.REACT_APP_Backened_url}/project`);
        setloading(false)
        setProjects(res.data);
      } catch (error) {
        setError(error.message);
      }
    })();
  }, [state]);

  return error ? (
    <h4>{error}</h4>
  ) : (
    <motion.div className="min-h-screen" variants={exitAnime} exit="exit">
      <motion.div
        className="flex flex-col justify-center items-center  "
        variants={bottom}
        initial="hidden"
        animate="visible"
      >
        <motion.h1
          className="text-gray-500 font-Nerko py-2"
          variants={top}
          whileHover="hover"
        >
          {" "}
          Projects
        </motion.h1>
        {loading?(<Loading/>):
        (<motion.div className="grid grid-col-1 sm:grid-cols-2 md:grid-cols-3 gap-y-5  py-5">
          {projects?.map((item, index) => {
            return (
              <motion.div
                key={index}
                className=" px-4  font-Nunito font-semibold rounded-full "
                variants={imgAnime}
                whileHover={"hover"}
              >
                <Card bg="dark" text="light">
                  <Card.Header as="h3">{item.name}</Card.Header>
                  <Card.Img
                    variant="Top"
                    className="h-60 w-full object-cover"
                    src={item.image}
                  />

                  <Card.Body>
                    <Card.Subtitle>
                      {" "}
                      <a
                        className="text-white "
                        href={item.link}
                        target="_blank"
                        rel="noreferrer"
                      >
                        <FontAwesomeIcon
                          icon={faLink}
                          color={"white"}
                          size="sm"
                        />{" "}
                        {item.link}
                      </a>
                    </Card.Subtitle>
                    <Card.Text>{item.detail}</Card.Text>
                  </Card.Body>
                </Card>
              </motion.div>
            );
          })}
        </motion.div>)}
      </motion.div>
    </motion.div>
  );
};

export default Project;
