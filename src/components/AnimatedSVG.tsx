"use client";

import { motion } from "framer-motion";

const draw = {
  hidden: { pathLength: 0, opacity: 0 },
  visible: (i: number) => {
    const delay = i * 0.2;
    return {
      pathLength: 1,
      opacity: 1,
      transition: {
        pathLength: { delay, type: "spring", duration: 2, bounce: 0 },
        opacity: { delay, duration: 0.02 },
      },
    };
  },
};

export default function AnimatedSTM() {
  return (
    <motion.svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 1437.52 412.46"
      initial="hidden"
      animate="visible"
      width="100%"
      height="auto"
      style={{ maxWidth: "100vw" }}
    >
      <motion.path
        d="M691.1,137.58h-93.31V48.34h291.6v89.24h-93.31v248.42h-104.98v-248.42Z"
        stroke="#237aba"
        strokeWidth={30}
        fill="none"
        strokeMiterlimit={10}
        variants={draw}
        custom={0}
        style={shape}
      />
      <motion.path
        d="M889.84,48.43h112.33v49.27c16.18-20.55,32.51-35.17,48.99-43.87,16.48-8.69,36.36-13.03,59.65-13.03,25.06,0,44.9,4.77,59.5,14.3,14.6,9.54,26.54,23.74,35.82,42.59,18.89-22.04,36.11-37.03,51.66-44.98s34.73-11.92,57.57-11.92c33.65,0,59.92,10.76,78.82,32.26,18.89,21.51,28.34,55.15,28.34,100.92v212.02h-120.61v-192.29c0-15.26-2.75-26.59-8.25-34.01-8.06-11.65-18.07-17.48-30.05-17.48-14.14,0-25.53,5.51-34.17,16.53s-12.96,28.72-12.96,53.08v174.19h-120.61v-185.96c0-14.83-.79-24.9-2.37-30.2-2.57-8.47-7.02-15.31-13.35-20.5s-13.75-7.79-22.25-7.79c-13.85,0-25.22,5.62-34.11,16.85-8.9,11.23-13.35,29.67-13.35,55.31v172.28h-120.61V48.43Z"
        stroke="#237aba"
        strokeWidth={30}
        fill="none"
        strokeMiterlimit={10}
        variants={draw}
        custom={1}
        style={shape}
      />
      <motion.path
        d="M319.66,296.77h163.74c13.91,0,20.64-6.75,20.64-17.85s-6.73-17.37-21.08-17.37h-74.47c-52.49,0-95.1-38.59-95.1-106.6,0-78.15,49.8-106.6,100.04-106.6h185.72v89.24h-160.16c-12.11,0-20.64,4.82-20.64,16.88s8.52,17.85,20.64,17.85h69.98c60.11,0,100.04,38.11,100.04,106.12,0,64.16-44.86,107.57-103.18,107.57h-187.51l1.34-89.24Z"
        stroke="#237aba"
        strokeWidth={30}
        fill="none"
        strokeMiterlimit={10}
        variants={draw}
        custom={2}
        style={shape}
      />

      <motion.path
        d="M264,280.46c0,72.9-59.1,132-132,132S0,353.36,0,280.46C0,219.61,68.28,115.42,110.62,50.66c10.2-15.6,33.02-15.68,43.34-.16,43.05,64.75,110.04,169.06,110.04,229.96Z"
        fill="#50b7f0"
        initial={{ scale: 0, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ delay: 1.5, duration: 0.8, type: "spring" }}
      />
      <motion.path
        d="M176.64,330.1c.14-53.86-26.71-80.71-80.57-80.57,53.86-.14,80.86-27.14,81-81-.14,53.86,26.71,80.71,80.57,80.57-53.85.15-80.85,27.15-81,81Z"
        fill="#50d466"
        initial={{ scale: 0, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ delay: 2, duration: 0.8, type: "spring" }}
      />
      <motion.path
        d="M247.48,99.38c-.23-33.13-16.91-49.81-50.04-50.04,33.13.23,49.57-16.21,49.34-49.34.23,33.13,16.91,49.81,50.04,50.04-33.13-.23-49.58,16.22-49.34,49.34Z"
        fill="#50b7f0"
        initial={{ scale: 0, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ delay: 2.5, duration: 0.8, type: "spring" }}
      />
    </motion.svg>
  );
}
/**
 * ==============   Styles   ================
 */

const shape: React.CSSProperties = {
  strokeLinecap: "round",
  fill: "transparent",
};
