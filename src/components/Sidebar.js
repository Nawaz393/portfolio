import React, { useState } from "react";
import { Link, useNavigate} from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { motion } from "framer-motion";
import { faBars } from "@fortawesome/free-solid-svg-icons";
const SideAnime = {
  hidden: {
    x: "-100vh",
  },
  visible: {
    x: 0,
    transition: {
      type: "spring",
      duration: 1.5,
    },
  },
};

const LinkAnime = {
  hover: {
    x: 20,
    scale: 1.2,
    color: "#fff",
    transition: {
      type: "spring",
    },
  },
};
const Sidebar = () => {
  const [toggle, settoggle] = useState(false);
const navigate=useNavigate();
  const item = [
    { page: "Home", link: "/AdminDashboard" },
    { page: "ChangePic", link: "/ChangePic" },
    { page: "Add Skills", link: "/AddSkill" },
    { page: "Add Quote", link: "/ChangeQuote" },
    { page: "New User", link: "/RegisterUser" },
    {page:"Change Skills",link:"/updateDeleteSkill"},
    {page:'Add Project',link:'/AddProject'},
    {page:'Change Project',link:'/UpdateDeleteProject'},
    {page:"Change about",link:"/ChangeAboutMe"},
    {page:"All Users",link:"/users"},
    {page:"change pass",link:"/updatepassword"},
  ];

  const sidebsritem = item.map((item) => {
    return (
      <motion.li
        variants={LinkAnime}
       whileHover="hover"
     
        className=" border-0 shadow-slate-800 shadow-lg rounded-full py-1 my-1  "
        key={item.link}
      >
        {" "}
        <Link
          className="no-underline text-slate-200 md:text-lg text-sm md:font-semibold tracking-tighter font-Nunito"
          to={item.link}
        >
          {item.page}
        </Link>
      </motion.li>
    );
  });

  return (
    <motion.aside className="mt-3  h-screen  sm:w-36 sm:bg-slate-800 rounded-r-lg sticky z-50"
    variants={SideAnime}
    initial="hidden"
    animate="visible"
    
    >
      <button
        className="mx-1 sm:hidden"
        onClick={() => {
          settoggle(!toggle);
        }}
      >
        <FontAwesomeIcon icon={faBars} color="#fff" size="xl"
         />
      </button>

      <ul
        className={
          toggle
            ? "flex flex-col items-start py-6  "
            : "sm:flex flex-col py-6  hidden"
        }
      >
        <button className="text-white font-Nunito underline "
        onClick={() => {
          
          localStorage.clear();
          navigate("/admin")
          
        }}
        >logout</button>
        {sidebsritem}
      </ul>
    </motion.aside>
  );
};

export default Sidebar;
