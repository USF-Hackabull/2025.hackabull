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

  // Define the transform values for each layer
  const layer1Y = useTransform(scrollYProgress, [0, 1], ["0%", "40%"]);
  const layer2Y = useTransform(scrollYProgress, [0, 1], ["0%", "45%"]);
  const layer3Y = useTransform(scrollYProgress, [0, 1], ["0%", "50%"]);
  const textY = useTransform(scrollYProgress, [0, 1], ["0%", "80%"]);

  return (
    <div
      ref={ref}
      className="w-full h-screen overflow-hidden relative relative flex items-center justify-center"
    >
      <motion.div
        style={{ y: textY }}
        className="flex flex-col items-center justify-center h-screen text-white overflow-hidden w-full relative max-w-full z-30"
      >
        <img
          className="z-20 flex object-contain max-h-full h-48"
          src="/images/HackDuke.png"
          alt="Hack Duke"
        ></img>
        <h1 className="text-2xl z-50"> 04.12.2025 </h1>
        <h1 className="mt-5 text-2xl z-50"> application closes in</h1>
        <Countdown
          date={new Date("2025-04-01T23:59:00")}
          renderer={CountdownRenderer}
        />
        <a
          href="https://lu.ma/9e1x29r4"
          target="_blank"
          rel="noopener noreferrer"
          className="text-2xl bg-[#C1413E] pl-8 pr-8 pt-1 pb-1 rounded-xl mt-5 z-50 transform transition duration-200 hover:scale-105"
        >
          Apply Now!
        </a>
      </motion.div>

      {/* Background Layer (Static) */}
      <div
        className="absolute inset-0 z-0 w-full h-full"
        style={{
          backgroundImage: `url(/image/backgrounds/parallaxbackground.png)`,
          backgroundPosition: "bottom",
          backgroundSize: "cover",
        }}
      />

      <motion.div
        className="absolute inset-0 z-10 -bottom-20"
        style={{
          backgroundImage: `url(/image/backgrounds/city1.png)`,
          backgroundPosition: "bottom",
          backgroundSize: "cover",
          y: layer1Y,
        }}
      />
      <motion.div
        className="absolute inset-0 z-20 -bottom-40"
        style={{
          backgroundImage: `url(/image/backgrounds/city2.png)`,
          backgroundPosition: "bottom",
          backgroundSize: "cover",
          y: layer2Y,
        }}
      />
      <motion.div
        className="absolute inset-0 z-20 -bottom-40"
        style={{
          backgroundImage: `url(/image/backgrounds/bridge.png)`,
          backgroundPosition: "bottom",
          backgroundSize: "cover",
          y: layer3Y,
        }}
      />
    </div>
  );
};
