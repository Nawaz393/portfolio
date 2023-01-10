import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import axios from "axios";
import { Card } from "react-bootstrap";
import { Button } from "react-bootstrap";
import Sidebar from "../components/Sidebar";
import useAuth from "../hooks/useAuth";
import CAlert from "../components/Alert";
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
    const [Delete, setDelete] = useState(false);
  const { state } = useAuth();
  const [unauth, setUnauth] = useState(false);
  const [users, setUsers] = useState([{}]);
 
  
  useEffect(() => {
   

    (async () => {
      try {
        const res = await axios.get("/user", {
          headers: {
            Authorization: `Bearer ${state.token}`,
          },
        });
        if (res.status === 200) {
          setUnauth(false);
        }
        setUsers(res.data || [{}]);
      } catch (error) {
        if (error.response.status === 401) {
          setUnauth(true);
        }
      }
    })();
  }, [Delete, state]);

  const clickDelete = async (id) => {
    const data = { id: id };
    try {
      await axios.delete(
        `${process.env.REACT_APP_Backened_url}/user`,
        {
          data,
          headers: {
            Authorization: `Bearer ${state.token}`,
          },
        }
      );
      setDelete(!Delete);
    } catch (error) {
      
    }
  };
  //check the users array that it is present and then map on it.

  const cards =
    users.length > 0 ? (
      users.map((item, index) => {
        return (
          <motion.div
            variants={CardAnime}
            initial="hidden"
            animate="visible"
            whileHover="hover"
            key={index}
            className="lg:w-4/5   "
          >
            <Card bg="dark" text="light">
              <Card.Header as="h5">{item.userName}</Card.Header>
              <Card.Body>
                <Card.Text>{item.email}</Card.Text>
                <Card.Text>{item.role}</Card.Text>
                <div className="my-3 ">
                  <span className="sm:mx-5 p-2">
                    <Button
                      variant="danger"
                      onClick={() => clickDelete(item.id)}
                    >
                      Delete
                    </Button>
                  </span>
                </div>
              </Card.Body>
            </Card>
          </motion.div>
        );
      })
    ) : (
      <></>
    );

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
          All Users
        </motion.h1>

        <main className=" flex justify-center items-center w-full">
          <div
            className=" grid grid-cols-1   
          
          gap-y-4
          w-full "
          >
            {unauth && (
              <CAlert
                variant="danger"
                heading="Unauthorized"
                text="You are not authorized to access this page"
              />
            )}
            {cards}
          </div>
        </main>
      </div>
    </motion.div>
  );
};

export default UpdDelSkill;
