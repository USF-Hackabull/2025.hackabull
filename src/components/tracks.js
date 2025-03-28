import { Panel } from "./panel";
import { H1 } from "./typography";

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
  // Pass class names instead of, e.g., vw units because Tailwind has issues with template literals
  return (
    <div
      className={`absolute z-20 flex flex-col space-y-2 items-center ${widthClass} ${leftClass} ${bottomClass} ${rightClass} ${topClass} ${className}`}
    >
      <h3 className="text-sm md:text-3xl text-white text-center">{title}</h3>
      <img src={image_src} alt={image_alt} className={imageWidthClass} />
    </div>
  );
};

export const Tracks = () => {
  // TODO: Lighting
  // TODO: Responsiveness
  return (
    <div
      className={`relative w-full h-[80vw] md:h-[70vw]`}
      style={{
        backgroundImage: `url('/image/backgrounds/tracksbackground.png')`,
        backgroundSize: "cover",
        backgroundPosition: "top",
      }}
    >
      <H1 className="text-center mb-8">Tracks</H1>

      {/* Center Track */}
      <Track
        title="Cybersecurity"
        image_src="/image/tracks/track1.png"
        image_alt="Crab"
        widthClass="w-[30vw] md:w-[25vw]"
        imageWidthClass="w-[25vw] md:w-[22vw]"
        leftClass="left-1/2"
        topClass="top-1/2"
        rightClass="right-auto"
        bottomClass="bottom-auto"
        className="transform -translate-x-1/2 -translate-y-1/2"
      />
  
      {/* Left Top Track */}
      <Track
        title="Fintech"
        image_src="/image/tracks/track2.png"
        image_alt="Turtle"
        widthClass="w-[25vw] md:w-[20vw]"
        imageWidthClass="w-[35vw] md:w-[30vw]"
        leftClass="left-[8vw] md:left-[5vw]"
        topClass="top-[25vh] md:top-[20vh]"
        rightClass="right-auto"
        bottomClass="bottom-auto"
      />

      {/* Right Top Track */}
      <Track
        title="Healthcare"
        image_src="/image/tracks/track3.png"
        image_alt="Whale"
        widthClass="w-[30vw] md:w-[25vw]"
        imageWidthClass="w-[35vw] md:w-[30vw]"
        rightClass="right-[8vw] md:right-[5vw]"
        topClass="top-[25vh] md:top-[20vh]"
        leftClass="left-auto"
        bottomClass="bottom-auto"
      />

      {/* Left Bottom Track */}
      <Track
        title="Sustainability"
        image_src="/image/tracks/track4.png"
        image_alt="Generic Fish"
        widthClass="w-[25vw] md:w-[20vw]"
        imageWidthClass="w-[35vw] md:w-[30vw]"
        leftClass="left-[8vw] md:left-[5vw]"
        bottomClass="bottom-[25vh] md:bottom-[20vh]"
        rightClass="right-auto"
        topClass="top-auto"
      />

      {/* Right Bottom Track */}
      <Track
        title="Automation"
        image_src="/image/tracks/track5.png"
        image_alt="Crab"
        widthClass="w-[25vw] md:w-[20vw]"
        imageWidthClass="w-[35vw] md:w-[30vw]"
        rightClass="right-[8vw] md:right-[5vw]"
        bottomClass="bottom-[25vh] md:bottom-[20vh]"
        leftClass="left-auto"
        topClass="top-auto"
      />
    </div>
  );
};
