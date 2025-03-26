import { H1 } from "./typography";
import { motion } from "framer-motion";

export const Speaker = () => {
  return (
    <div
      className="relative w-full h-auto"
      style={{
        backgroundImage: `url('/image/backgrounds/speakersbackground.png')`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
        aspectRatio: "16 / 9",
      }}
    >
      <div
        className="absolute z-20 -top-20 text-center w-full"
        style={{ zIndex: 2 }}
      >
        <motion.img
          src="/image/backgrounds/billboardlight.png"
          alt="Overlay"
          className="w-full h-auto object-contain"
          initial={{ opacity: 1 }}
          animate={{ opacity: [1, 0.6, 0.3, 0.8, 0.1, 1] }}
          transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut" }}
        />
        <div
          className="absolute inset-0 flex items-center justify-center z-20 flex flex-col"
          style={{ zIndex: 2 }}
        >
          <H1 className="text-center mb-8">Speakers</H1>
          <h2 className="text-3xl font-bold text-black">Coming soon</h2>
        </div>
      </div>
    </div>
  );
};
