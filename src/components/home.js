import { motion, useScroll, useTransform, animate } from "framer-motion";
import React, { useRef, useState, useEffect } from "react";
import Countdown from "react-countdown";
import CountdownRenderer from "./countdownRenderer";

// Styled text component to match the countdown styling
const StyledText = ({ children }) => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <div
      style={{
        background: isHovered
          ? "rgba(255, 255, 255, 0.95)"
          : "rgba(255, 255, 255, 0.85)",
        padding: "6px 16px",
        borderRadius: "12px",
        margin: "4px 0",
        cursor: "default",
        transition: "all 0.3s ease",
        boxShadow: isHovered
          ? "0 0 15px rgba(250, 240, 190, 0.5)"
          : "0 0 8px rgba(0, 0, 0, 0.1)",
        border: "1px solid rgba(250, 240, 190, 0.3)",
      }}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <div
        style={{
          color: "#2c5102",
          fontSize: "22px",
          fontWeight: "bold",
          textShadow: "0 1px 2px rgba(255, 255, 255, 0.5)",
          transition: "all 0.3s ease",
        }}
      >
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
        background: isHovered
          ? "rgba(255, 255, 255, 0.95)"
          : "rgba(255, 255, 255, 0.85)",
        padding: "6px 16px",
        borderRadius: "12px",
        margin: "4px 0",
        cursor: "default",
        transition: "all 0.3s ease",
        boxShadow: isHovered
          ? "0 0 15px rgba(250, 240, 190, 0.5)"
          : "0 0 8px rgba(0, 0, 0, 0.1)",
        border: "1px solid rgba(250, 240, 190, 0.3)",
      }}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <Countdown
        date={new Date("2025-04-11T23:59:00")}
        renderer={({ days, hours, minutes, seconds }) => (
          <div
            style={{
              color: "#2c5102",
              fontSize: "22px",
              fontWeight: "bold",
              textShadow: "0 1px 2px rgba(255, 255, 255, 0.5)",
              transition: "all 0.3s ease",
            }}
          >
            {days} days {hours} hours {minutes} minutes {seconds} seconds
          </div>
        )}
      />
    </div>
  );
};

export const Home = () => {
  const ref = useRef(null);
  const logoRef = useRef(null);
  const [isLogoHovered, setIsLogoHovered] = useState(false);
  const [hasAnimated, setHasAnimated] = useState(false);

  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"],
  });

  const textY = useTransform(scrollYProgress, [0, 1], ["0%", "30%"]);

  // Entrance animation for the logo
  useEffect(() => {
    if (!hasAnimated && logoRef.current) {
      const animation = {
        scale: [0.8, 1.1, 1],
        opacity: [0, 1],
        y: [50, -10, 0],
        transition: { duration: 1.2, ease: "easeOut" },
      };

      // Apply animation
      const element = logoRef.current;
      element.style.opacity = "0";
      element.style.transform = "scale(0.8) translateY(50px)";

      setTimeout(() => {
        element.style.transition = "all 1.2s ease-out";
        element.style.opacity = "1";
        element.style.transform = "scale(1) translateY(0)";
        setHasAnimated(true);
      }, 100);
    }
  }, [hasAnimated]);

  return (
    <div
      ref={ref}
      className="w-full h-[90dvh] md:h-[140dvh] overflow-hidden relative flex items-center justify-center"
      style={{
        backgroundImage: `url(/image/backgrounds/landingbackground.png)`,
        backgroundPosition: "bottom",
        backgroundSize: "cover",
        backgroundRepeat: "no-repeat",
      }}
    >
      <motion.div
        style={{ y: textY }}
        className="flex flex-col items-center mt-[-25vh] justify-start h-screen  w-full relative max-w-full z-30"
      >
        <div
          ref={logoRef}
          className="relative"
          onMouseEnter={() => setIsLogoHovered(true)}
          onMouseLeave={() => setIsLogoHovered(false)}
        >
          {/* Golden glow behind the logo */}
          <div
            className="absolute inset-0 rounded-full blur-2xl z-10"
            style={{
              background:
                "radial-gradient(circle, rgba(250, 240, 190, 0.8) 0%, rgba(250, 240, 190, 0.4) 40%, rgba(250, 240, 190, 0) 70%)",
              opacity: isLogoHovered ? 0.9 : 0.6,
              transform: `scale(${isLogoHovered ? 1.1 : 1})`,
              transition: "all 0.6s ease",
            }}
          ></div>

          <img
            className="z-20 relative flex object-contain max-h-full h-80 md:h-96 lg:h-[28rem] mb-2 transform transition-all duration-500 hover:scale-110"
            style={{
              filter: `drop-shadow(0 0 8px rgba(250, 240, 190, 0.5)) drop-shadow(0 0 20px rgba(44, 81, 2, 0.5))`,
              animation: "pulse 3s infinite alternate",
            }}
            src="/image/landing-hackabull.png"
            alt="Hackabull"
          />

          {/* CSS for the pulse animation */}
          <style jsx>{`
            @keyframes pulse {
              0% {
                filter: drop-shadow(0 0 10px rgba(250, 240, 190, 0.5))
                  drop-shadow(0 0 20px rgba(44, 81, 2, 0.4));
              }
              100% {
                filter: drop-shadow(0 0 15px rgba(250, 240, 190, 0.7))
                  drop-shadow(0 0 30px rgba(44, 81, 2, 0.6));
              }
            }
          `}</style>
        </div>

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
