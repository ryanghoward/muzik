import React, { useState } from "react";
import { motion } from "framer-motion";
import VisibilitySensor from "react-visibility-sensor";
// import ImgIcon from "../images/icon.png";

function Feature({ icon, title }) {
  const variant = {
    true: {
      transform: "scale(1)",
    },
    false: {
      transform: "scale(0.5)",
    },
  };

  const [elementIsVisible, setElementIsVisible] = useState(false);

  return (
    <VisibilitySensor onChange={(isVisible) => setElementIsVisible(isVisible)}>
      <div className='feature flex items-center justify-center flex-col relative text-center mx-12'>
        <motion.div
          variants={variant}
          transition={{
            duration: 1,
            type: "ease-out",
          }}
          animate={`${elementIsVisible}`}
          className='icon bg-[#081730] rounded-2xl p-4'
        >
          <img
            src={require(`../images/${icon}.png`)}
            alt='/'
            className='w-[3rem]'
          />
        </motion.div>
        <span className='mt-5'>{title}</span>
        <span className='text-[#707070] mt-4'>
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Maiores in
          ullam fuga, necessitatibus unde culpa?
        </span>
        <span className='text=[#e600ff] underline mt-[3rem] hover:cursor-pointer'>
          Learn More
        </span>
      </div>
    </VisibilitySensor>
  );
}

export default Feature;
