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

  hover: {
    scale: [null, 1.2, 1.1],
    transition: {
      delay: 0.2,
      duration: 1,
    },
  },
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
    scale: [1.05,1.02],
    transition: {
      delay:0.2,
      repeat: Infinity,
     
      duration: 0.5,
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

export { left, right, exitAnime, bottom, top };
