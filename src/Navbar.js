import React from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
const navImgAnime = {
  visible: {
    rotateZ: 360,
    transition: {
      delay: 1,
    },
  },
  hover: {
    color: "#fff",
    scale: 1.5,
    rotateZ: 30,
  },
};

const navAnime = {
  hidden: {
    y: "-100vw",
  },
  visible: {
    y: 0,
    transition: {
      type: "spring",
      duration: 1,
    },
  },
};
const navLinkAnime = {
  hover: {
    scale: 1.2,
    color: "#fff",
  },
};

const smLinkAnime = {
  hover: {
    x: 20,
    scale: 1.2,
    color: "#fff",
    transition: {
      type: "spring",
    },
  },
};

export default function Navbar() {
  const [toggle, settoggle] = React.useState(false);

  const navItems = [
    { page: "Home", link: "/" },
    { page: "Skills", link: "skills" },
    { page: "Projects", link: "Projects" },
    { page: "Contact Me", link: "contact" },
    { page: "About Me", link: "About" },

  ];

  const nav_bar = navItems.map((item) => {
    return (
      <motion.li
        className="mr-4 cursor-pointer"
        key={item.page}
        variants={toggle ? smLinkAnime : navLinkAnime}
        animate="visible"
        whileHover="hover"
      >
        {" "}
        <Link className=" text-gray-300 no-underline" to={item.link}>
          {item.page}
        </Link>{" "}
      </motion.li>
    );
  });
  return (
    <nav className="bg-gray-800 shadow-2xl sm:h-12 sticky  sm:items-center flex   ">
      <div className="  cursor-pointer inline sm:mr-auto  ">
        
        
        <motion.svg
          variants={navImgAnime}
          animate="visible"
          
          drag
          dragConstraints={{
            top: 0,
            bottom: 0,
            left: 0,
            right: 0,
          }}
          dragElastic={1}
          xmlns="http://www.w3.org/2000/svg"
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
          className="feather feather-briefcase text-white"
        >
          <rect x="2" y="7" width="20" height="14" rx="2" ry="2"></rect>
          <path d="M16 21V5a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v16"></path>
        </motion.svg>
      </div>
      <div>
        <motion.ul
          className={
            toggle
              ? " text-gray-600   flex  pr-8   sm:flex-row  sm: flex-col  font-bold tracking-wider my-7"
              : " text-gray-600   sm:flex   sm:flex-row  sm: flex-col  font-bold tracking-wider my-7 hidden"
          }
          variants={navAnime}
          initial="hidden"
          animate="visible"
        >
          {nav_bar}
        </motion.ul>
      </div>
      <div className=" sm:hidden ml-auto">
        <button
          onClick={() => {
            settoggle(!toggle);
          }}
        >
          <svg
            whilehover="hover"
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
            className="feather feather-menu text-white"
          >
            <line x1="3" y1="12" x2="21" y2="12"></line>
            <line x1="3" y1="6" x2="21" y2="6"></line>
            <line x1="3" y1="18" x2="21" y2="18"></line>
          </svg>
        </button>
      </div>
    </nav>
  );
}
