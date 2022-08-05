import VisibilitySensor from "react-visibility-sensor";
import { useState } from "react";

function Hero() {
  const [elementIsVisible, setElementIsVisible] = useState(false);

  const bg = {
    true: {
      left: "7rem",
    },
    false: {
      left: "19rem",
    },
  };

  const musicPlayer = {
    true: {
      left: "295px",
    },
    false: {
      left: "235px",
    },
  };

  const rect = {
    true: {
      left: "11rem",
    },
    false: {
      left: "13rem",
    },
  };

  const heart = {
    true: {
      left: "9rem",
    },
    false: {
      left: "12,5rem",
    },
  };

  return (
    <VisibilitySensor
      onChange={(isVisible) => setElementIsVisible(isVisible)}
      minTopValue={300}
    >
      <div className='wrapper bg-[#081730] flex items-center justify-between px-[5rem] rounded-b-[5rem] w-[100%] h-[35rem] relative z-[3]'>
        <div className='headings flex flex-col items-start justify-center h-[100%] text-[3rem]'>
          <span>Experience The</span>
          <span>
            <b>Best Quality Music</b>
          </span>
          <span className='text-[15px] text-[#525d6e]'>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. In, esse.
            <br />
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Amet,
            maiores?
          </span>
          <div>
            <span className='text-[13px]'>Download now on IOS and Android</span>
          </div>
        </div>
        <div className='images relative w-[50%]'></div>
      </div>
    </VisibilitySensor>
  );
}

export default Hero;
