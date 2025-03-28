import { Title, Text } from "./typography";
import { motion } from "framer-motion";

export const Speaker = () => {
  return (
    <div
      className="relative w-full h-auto"
      style={{
        backgroundImage: `url('/image/backgrounds/speakersbackground.png')`,
        backgroundSize: "100% 100%",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
        aspectRatio: "16 / 9",
      }}
    >
      <div
        className="absolute z-20 -top-5 md:-top-10 text-center w-full"
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
          className="absolute inset-0 flex items-center justify-center z-20 flex flex-col -top-[20dvw]"
          style={{ zIndex: 2 }}
        >
          <Title>Speakers</Title>
          <Text>Coming soon</Text>
        </div>
      </div>
    </div>
  );
};
