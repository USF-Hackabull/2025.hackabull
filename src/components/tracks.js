import { Title } from "./typography";
import { useState, useEffect } from "react";

// Mobile Track component for smaller screens
const MobileTrack = ({ title, image_src, image_alt }) => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <div className="flex flex-col items-center mb-10">
      <h3
        className="text-4xl font-bold text-white text-center mb-3"
        style={{
          textShadow: "0 2px 4px rgba(0, 0, 0, 0.5)",
        }}
      >
        {title}
      </h3>
      <div
        className="w-40 h-40 relative"
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
      >
        <img
          src={image_src}
          alt={image_alt}
          className="w-full h-full object-contain transition-all duration-300"
          style={{
            filter: isHovered
              ? "drop-shadow(0 0 12px rgba(157, 255, 0, 0.9))"
              : "drop-shadow(0 0 8px rgba(157, 255, 0, 0.7))",
          }}
        />
      </div>
    </div>
  );
};

// Desktop Track component using absolute positioning (original approach)
const Track = ({
  title,
  image_src,
  image_alt,
  widthClass,
  leftClass,
  bottomClass,
  rightClass,
  topClass,
  imageWidthClass,
  className = "",
}) => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <div
      className={`absolute z-20 flex flex-col items-center ${widthClass} ${leftClass} ${bottomClass} ${rightClass} ${topClass} ${className}`}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <h3
        className="text-3xl font-bold text-white text-center mb-2 whitespace-nowrap"
        style={{
          textShadow: "0 2px 4px rgba(0, 0, 0, 0.5)",
        }}
      >
        {title}
      </h3>
      <img
        src={image_src}
        alt={image_alt}
        className={`${imageWidthClass} transition-all duration-300`}
        style={{
          filter: isHovered
            ? "drop-shadow(0 0 12px rgba(157, 255, 0, 0.9))"
            : "drop-shadow(0 0 8px rgba(157, 255, 0, 0.7))",
        }}
      />
    </div>
  );
};

export const Tracks = () => {
  // State to track viewport width
  const [isMobile, setIsMobile] = useState(false);

  // Track data for reuse
  const trackData = [
    {
      title: "Sustainability",
      image_src: "/image/tracks/track1.webp",
      image_alt: "Sustainability Icon",
      widthClass: "w-[30vw] md:w-[25vw]",
      imageWidthClass: "w-[45vw] md:w-[40vw]",
      leftClass: "left-1/2",
      topClass: "top-1/2",
      rightClass: "right-auto",
      bottomClass: "bottom-auto",
      className: "transform -translate-x-1/2 -translate-y-1/2",
    },
    {
      title: "Fintech",
      image_src: "/image/tracks/track2.webp",
      image_alt: "Fintech Icon",
      widthClass: "w-[25vw] md:w-[20vw]",
      imageWidthClass: "w-[50vw] md:w-[45vw]",
      leftClass: "left-[5vw] md:left-[2vw]",
      topClass: "top-[30vh] md:top-[25vh]",
      rightClass: "right-auto",
      bottomClass: "bottom-auto",
    },
    {
      title: "Cybersecurity",
      image_src: "/image/tracks/track3.webp",
      image_alt: "Cybersecurity Icon",
      widthClass: "w-[30vw] md:w-[25vw]",
      imageWidthClass: "w-[50vw] md:w-[45vw]",
      rightClass: "right-[5vw] md:right-[2vw]",
      topClass: "top-[30vh] md:top-[25vh]",
      leftClass: "left-auto",
      bottomClass: "bottom-auto",
    },
    {
      title: "Healthcare",
      image_src: "/image/tracks/track4.webp",
      image_alt: "Healthcare Icon",
      widthClass: "w-[25vw] md:w-[20vw]",
      imageWidthClass: "w-[50vw] md:w-[45vw]",
      leftClass: "left-[5vw] md:left-[2vw]",
      bottomClass: "bottom-[30vh] md:bottom-[25vh]",
      rightClass: "right-auto",
      topClass: "top-auto",
    },
    {
      title: "Robotics",
      image_src: "/image/tracks/track5.webp",
      image_alt: "Robotics Icon",
      widthClass: "w-[25vw] md:w-[20vw]",
      imageWidthClass: "w-[50vw] md:w-[45vw]",
      rightClass: "right-[5vw] md:right-[2vw]",
      bottomClass: "bottom-[30vh] md:bottom-[25vh]",
      leftClass: "left-auto",
      topClass: "top-auto",
    },
  ];

  // Effect to check viewport width and set mobile state
  useEffect(() => {
    const checkIsMobile = () => {
      setIsMobile(window.innerWidth < 768);
    };

    // Initial check
    checkIsMobile();

    // Add event listener for window resize
    window.addEventListener("resize", checkIsMobile);

    // Clean up event listener
    return () => window.removeEventListener("resize", checkIsMobile);
  }, []);

  return (
    <div
      className={`relative w-full ${
        isMobile ? "py-12" : "h-[120vw] md:h-[100vw]"
      }`}
      style={{
        backgroundImage: `url('/image/backgrounds/tracksbackground.png')`,
        backgroundSize: isMobile ? "cover" : "100% 100%",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
      }}
    >
      <Title className="text-center mb-8">Tracks</Title>

      {isMobile ? (
        // Mobile layout - vertically stacked grid
        <div className="container mx-auto px-4">
          <div className="flex flex-col items-center justify-center mt-6">
            {trackData.map((track, index) => (
              <MobileTrack
                key={index}
                title={track.title}
                image_src={track.image_src}
                image_alt={track.image_alt}
              />
            ))}
          </div>
        </div>
      ) : (
        // Desktop layout - absolute positioning
        <>
          {trackData.map((track, index) => (
            <Track
              key={index}
              title={track.title}
              image_src={track.image_src}
              image_alt={track.image_alt}
              widthClass={track.widthClass}
              imageWidthClass={track.imageWidthClass}
              leftClass={track.leftClass}
              topClass={track.topClass}
              rightClass={track.rightClass}
              bottomClass={track.bottomClass}
              className={track.className}
            />
          ))}
        </>
      )}
    </div>
  );
};
