import { motion, useScroll, useTransform } from "framer-motion";
import React, { useRef, useState } from "react";
import Countdown from "react-countdown";
import CountdownRenderer from "./countdownRenderer";

// Styled text component to match the countdown styling
const StyledText = ({ children }) => {
  const [isHovered, setIsHovered] = useState(false);
  
  return (
    <div 
      style={{
        background: isHovered ? 'rgba(140, 197, 197, 0.75)' : 'rgba(140, 197, 197, 0.65)', 
        padding: '6px 16px',
        borderRadius: '12px',
        margin: '4px 0',
        cursor: 'default',
        transition: 'all 0.3s ease',
        boxShadow: isHovered ? '0 0 15px rgba(250, 240, 190, 0.5)' : '0 0 8px rgba(0, 0, 0, 0.2)',
        border: '1px solid rgba(250, 240, 190, 0.3)'
      }}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <div style={{
        color: '#2c5102',
        fontSize: '22px',
        fontWeight: 'bold',
        textShadow: '0 1px 2px rgba(255, 255, 255, 0.7)',
        transition: 'all 0.3s ease'
      }}>
        {children}
      </div>
    </div>
  );
};

// Custom component with forced styling using the specified dark green color
const GreenCountdown = () => {
  const [isHovered, setIsHovered] = useState(false);
  
  return (
    <div 
      style={{
        background: isHovered ? 'rgba(140, 197, 197, 0.75)' : 'rgba(140, 197, 197, 0.65)', 
        padding: '6px 16px',
        borderRadius: '12px',
        margin: '4px 0',
        cursor: 'default',
        transition: 'all 0.3s ease',
        boxShadow: isHovered ? '0 0 15px rgba(250, 240, 190, 0.5)' : '0 0 8px rgba(0, 0, 0, 0.2)',
        border: '1px solid rgba(250, 240, 190, 0.3)'
      }}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <Countdown
        date={new Date("2025-04-11T23:59:00")}
        renderer={({ days, hours, minutes, seconds }) => (
          <div style={{
            color: '#2c5102',
            fontSize: '22px',
            fontWeight: 'bold',
            textShadow: '0 1px 2px rgba(255, 255, 255, 0.7)',
            transition: 'all 0.3s ease'
          }}>
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
        className="flex flex-col items-center mt-[-25vh] justify-start h-screen overflow-hidden w-full relative max-w-full z-30"
      >
        <img
          className="z-20 flex object-contain max-h-full h-80 md:h-96 lg:h-[28rem] mb-2 transform transition-all duration-500 hover:scale-105"
          src="/image/landing-hackabull.png"
          alt="Hackabull"
        />
        
        {/* Styled date */}
        <StyledText>04.12.2025 - 04.13.2025</StyledText>
        
        {/* Styled application closing text */}
        <StyledText>application closes in</StyledText>
        
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
