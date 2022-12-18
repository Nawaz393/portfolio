import React,{useState,useEffect} from 'react';
import Sidebar from './Sidebar';
import { Card } from 'react-bootstrap';
import axios from 'axios';
import {motion} from "framer-motion"

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
      scale: [null, 1.2, 1.06],
  
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
      scale: [null, 1.2, 1.1],
  
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
const AdminDashBoard = () => {

const [count,setcount]= useState([]);

useEffect(()=>{

(async()=>{


const res=await axios.get("/admin");

setcount(res.data)

}
)();

},[])




const data=[{name:"Users"},
{name:"Skills"}
]

console.log(count)
const cards=data.map((item,index)=>{


    return(
        <motion.div
        
        variants={CardAnime}
        initial="hidden"
        animate="visible"
        whileHover="hover"
        >
        <Card key={index} 
       
        
        >
        <Card.Body>
        <Card.Title>{item.name}</Card.Title>
        <Card.Subtitle>{count[index]?.Count}</Card.Subtitle>
        </Card.Body>
                </Card>
                </motion.div>

    )
})

    return (
        <motion.div className=" flex flex-row items-start text-center"
        
        variants={exitAnime}
        exit="exit"
        >

            <div>

            <Sidebar/>
            </div>
            
                
            <div className=' mt-20  text-center py-1 px-14  lg:ml-48'>

                <motion.h1 className='text-slate-400 font-Nerko font-semibold '
                variants={nameAnime}
                initial="hidden"
                animate="visible"
                whileHover="hover"
                >welcome to admin Dashboard</motion.h1>

                <main className='grid md:grid-cols-2  py-3  gap-x-3 gap-y-3  '>
                 
               
            {cards}
                </main>
            </div>


          
        </motion.div>
    );
}

export default AdminDashBoard;
