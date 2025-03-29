import { motion, useScroll, useTransform } from "framer-motion";
import React, { useRef } from "react";
import Countdown from "react-countdown";

// Styled text component with TailwindCSS hover classes
const StyledText = ({ children }) => {
  return (
    <div
      className="transition-all duration-300 p-1.5 rounded-3xl my-1 cursor-default 
                 bg-white/70 hover:bg-white/80
                 shadow-[0_0_8px_#00000033] hover:shadow-[0_0_15px_#faf0be80] 
                 border border-[#faf0be4d] px-4"
    >
      <div
        className="text-[#2c5102] text-xl font-bold transition-all duration-300"
        style={{ textShadow: "0 1px 2px rgba(255, 255, 255, 0.7)" }}
      >
        {children}
      </div>
    </div>
  );
};

// Custom component using TailwindCSS hover classes
const GreenCountdown = () => {
  return (
    <div
      className="transition-all duration-300 p-1.5 rounded-3xl my-1 cursor-default 
                 bg-white/70 hover:bg-white/80
                 shadow-[0_0_8px_#00000033] hover:shadow-[0_0_15px_#faf0be80] 
                 border border-[#faf0be4d] px-4"
    >
      <Countdown
        date={new Date("2025-04-11T23:59:00")}
        renderer={({ days, hours, minutes, seconds }) => (
          <div
            className="text-[#2c5102] text-xl font-bold transition-all duration-300"
            style={{ textShadow: "0 1px 2px rgba(255, 255, 255, 0.7)" }}
          >
            <p className="text-center">Application closes in</p>
            {days} days {hours} hours {minutes} minutes {seconds} seconds
          </div>
        )}
      />
    </div>
  );
};

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
          className="z-20 flex object-contain max-h-full h-70 md:h-80 lg:h-90 mb-2 transform transition-all duration-500 hover:scale-105"
          src="/image/landing-hackabull.png"
          alt="Hackabull"
        />

        {/* Styled date */}
        <StyledText>04.12.2025 - 04.13.2025</StyledText>

        {/* Using our custom component with forced styling */}
        <GreenCountdown />

        <a
          href="https://lu.ma/9e1x29r4"
          target="_blank"
          rel="noopener noreferrer"
          className="text-xl bg-[#C1413E] px-7 py-1 rounded-xl mt-3 z-50 transform transition duration-200 hover:scale-105 font-bold text-white"
        >
          Apply Now!
        </a>
      </motion.div>
    </div>
  );
};
