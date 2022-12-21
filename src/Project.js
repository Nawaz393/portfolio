import React from "react";
import {imgAnime, exitAnime, bottom, top} from './Anime'

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Card } from "react-bootstrap";
import {faLink} from '@fortawesome/free-solid-svg-icons';
import {motion} from 'framer-motion';
const arr = [
  {
    pic: "picture",
    name: "hello",
    desc: "ghjkl;lkjhgfghjkl;lkjhgfghjklkj",
    link: "fghjkl;lkj",
  },
  {
    pic: "picture",
    name: "hello",
    link: "fghjkl;lkj",
    desc: "ghjkl;lkjhgfghjkl;lkjhgfghjklkj",
  },
  {
    pic: "picture",
    name: "hello",
    link: "fghjkl;lkj",
    desc: "ghjkl;lkjhgfghjkl;lkjhgfghjklkj",
  },
  {
    pic: "picture",
    name: "hello",
    link: "fghjkl;lkj",
    desc: "ghjkl;lkjhgfghjkl;lkjhgfghjklkj",
  },
];

const Project = () => {
  return (
    <motion.div className="min-h-screen"
    variants={exitAnime}
    exit="exit"
    
    >
      <motion.div className="flex flex-col justify-center items-center  "
      variants={bottom}
      initial="hidden"
        animate="visible"
      
      >

        <motion.h1 className="text-gray-500 font-Nerko py-2"
        variants={top}
        whileHover="hover"
      


        > Projects</motion.h1>
        <motion.div className="grid grid-col-1 sm:grid-cols-2 md:grid-cols-3 gap-y-5  py-5">
          {arr.map((item, index) => {
            return (
              <motion.div key={index} className=" px-4  font-Nunito font-semibold rounded-full "
              
              
              variants={imgAnime}
              whileHover={"hover"}
    
              >
                <Card bg="dark" text="light"  >
                <Card.Header as='h3' >{item.name}</Card.Header>
                  <Card.Img variant="Top" src={item.pic} />

                  <Card.Body >
                    <Card.Subtitle>  <a 
                    
                    className="text-white "
                    href={item.link}><FontAwesomeIcon icon={faLink} color={"white"} size="sm"/> {item.link}</a></Card.Subtitle>
                    <Card.Text>{item.desc}</Card.Text>
                  </Card.Body>
                </Card>
              </motion.div>
            );
          })}
        </motion.div>
      </motion.div>
    </motion.div>
  );
};

export default Project;
