import { motion, useScroll, useTransform } from "framer-motion";
import React, { useRef } from "react";
import Countdown from "react-countdown";
import CountdownRenderer from "./countdownRenderer";

export const Home = () => {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"],
  });

  const textY = useTransform(scrollYProgress, [0, 1], ["0%", "40%"]);

  return (
    <div
      ref={ref}
      className="w-full h-[90dvh] md:h-[130dvh] overflow-hidden relative flex items-center justify-center"
      style={{
        backgroundImage: `url(/image/backgrounds/landingbackground.png)`,
        backgroundPosition: "bottom",
        backgroundSize: "cover",
        backgroundRepeat: "no-repeat",
      }}
    >
      <motion.div
        style={{ y: textY }}
        className="flex flex-col items-center justify-center h-screen overflow-hidden w-full relative max-w-full z-30"
      >
        <img
          className="z-20 flex object-contain max-h-full h-48"
          src="/image/landing-hackabull.png"
          alt="Hackabull"
        />
        <h1 
          className="text-2xl z-50 font-bold" 
          style={{ 
            color: '#FFFFFF',
            textShadow: '0 2px 4px rgba(0,0,0,0.8), 0 0 10px rgba(0,0,0,0.5)'
          }}
        > 
          04.12.2025 - 04.13.2025 
        </h1>
        <h1 
          className="mt-5 text-2xl z-50 font-bold" 
          style={{ 
            color: '#FFFFFF',
            textShadow: '0 2px 4px rgba(0,0,0,0.8), 0 0 10px rgba(0,0,0,0.5)'
          }}
        > 
          application closes in
        </h1>
        <Countdown
          date={new Date("2025-04-11T23:59:00")}
          renderer={CountdownRenderer}
        />
        <a
          href="https://lu.ma/9e1x29r4"
          target="_blank" 
          rel="noopener noreferrer"
          className="text-2xl bg-[#C1413E] pl-8 pr-8 pt-1 pb-1 rounded-xl mt-5 z-50 transform transition duration-200 hover:scale-105 font-bold"
        >
          Apply Now!
        </a>
      </motion.div>
    </div>
  );
};
