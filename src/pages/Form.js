import React from "react";
import emailjs from "emailjs-com";
import { Alert } from "react-bootstrap";
import { motion } from "framer-motion";

const left = {
  hidden: {
    x: "-100vw",
  },
  visible: {
    x: 0,
    transition: {
      delay: 0.5,
      duration: 1.5,
    },
  },
};
const right = {
  hidden: {
    x: "100vw",
  },
  visible: {
    x: 0,
    transition: {
      delay: 0.8,
      duration: 2,
    },
  },
};

const top = {
  hidden: {
    y: "-100vh",
  },
  visible: {
    y: 0,
    transition: {
      delay: 0.8,
      duration: 2,
    },
  },

  hover:{


    scale:[null,1.2,1.1],
    transition:{
      delay:0.2,
      duration:1,
    }
  }
};

const bottom = {
  hidden: {
    y: "100vh",
  },
  visible: {
    y: 0,
    transition: {
      delay: 0.5,
      duration: 1.5,
    },
  },
  hover: {
    scale: 1.05,
    transition: {
      yoyo: Infinity,
      duration: 0.5,
    },
  },
};
const exitAnime={


  exit:{


    y:"-100vh",
    transition:{


      duration:1,
      ease:"easeInOut"
    }
  }
}

function Form() {
  const [suceess, setsuccess] = React.useState(false);
  const [show, setshow] = React.useState(false);

  const form = React.useRef();

  const sendEmail = (e) => {

    e.preventDefault();

    emailjs
      .sendForm("Mnawaz", process.env.REACT_APP_Form_template, form.current, process.env.REACT_APP_Form_Api)
      .then(
        (result) => {
          setsuccess(true);
          setshow(true);
        },
        (error) => {
          setsuccess(false);
          setshow(true);
        }
      );
    e.target.reset();
  };
  return (
    <motion.div className="min-h-screen"
    
    variants={exitAnime}
    exit="exit"
    >
      <form ref={form} onSubmit={sendEmail}>
        <div className="my-32 px-20">
        
          <motion.h4
            className="text-gray-400 text-center capitalize pb-3  font-Nerko"
            variants={top}
            initial="hidden"
            animate="visible"
            whileHover="hover"
          >
            Contact me{" "}
          </motion.h4>

          <div className="grid  lg:px-60 gap-x-2 gap-y-4 ">
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
                <p>
                  {suceess
                    ? "your email is successfully submitted"
                    : "please resend email"}
                </p>
              </Alert>
            )}
          </div>
            <motion.input
              variants={left}
              initial="hidden"
              animate="visible"
              minLength={"5"}
              required
              placeholder="Name"
              name="name"
              autoComplete="none"
              className="rounded-lg py-2 px-3 hover:bg-gray-100  focus:outline-blue-300 border-none   "
            />

            <motion.input
              variants={right}
              initial="hidden"
              animate="visible"
              placeholder="Email"
              type={"email"}
              name="email"
              required
              autoComplete="none"
              className="rounded-lg py-2 px-3 hover:bg-gray-100  focus:outline-blue-300 border-none   "
            />
            <motion.textarea
              variants={left}
              initial="hidden"
              animate="visible"
              minLength={"10"}
              placeholder="Description"
              name="desc" 
              required
              autoComplete="none"
              className="rounded-lg py-2 px-3 hover:bg-gray-100 focus:outline-blue-300 shadow-lg border-none  sm:col-span-2 "
            />
            <motion.button
              className="sm:col-span-2 h-10 border-gray-400  border-2 rounded-lg text-gray-400 capitalize font-Nunito font-bold "
              variants={bottom}
              initial="hidden"
              animate="visible"
              whileHover="hover"
            >
              Submit
            </motion.button>
          </div>
        </div>
      </form>
    </motion.div>
  );
}

export default Form;
