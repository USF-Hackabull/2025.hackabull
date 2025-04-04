import { Title } from "./typography";

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
      className={`absolute z-20 flex flex-col items-center ${widthClass} ${leftClass} ${bottomClass} ${rightClass} ${topClass} ${className}`}
    >
      <div className="relative">
        <h3 className="absolute top-[-0.5rem] left-1/2 transform -translate-x-1/2 text-sm md:text-3xl text-white text-center whitespace-nowrap">
          {title}
        </h3>
        <img src={image_src} alt={image_alt} className={imageWidthClass} />
      </div>
    </div>
  );
};

export const Tracks = () => {
  // TODO: Lighting
  // TODO: Responsiveness
  //Globe w leaf - sustainability 
  //Square w dollar sign - fintech
  //Tree with lock - cybersecurity
  //Heart with hand - healthcare
  //Gear - automation
  return (
    <div
      className={`relative w-full h-[120vw] md:h-[100vw]`}
      style={{
        backgroundImage: `url('/image/backgrounds/tracksbackground.png')`,
        backgroundSize: "100% 100%",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
      }}
    >
      <Title className="text-center mb-8">Tracks</Title>

      {/* Center Track */}
      <Track
        title="Sustainability"
        image_src="/image/tracks/track1.webp"
        image_alt="Crab"
        widthClass="w-[30vw] md:w-[25vw]"
        imageWidthClass="w-[45vw] md:w-[40vw]"
        leftClass="left-1/2"
        topClass="top-1/2"
        rightClass="right-auto"
        bottomClass="bottom-auto"
        className="transform -translate-x-1/2 -translate-y-1/2"
      />

      {/* Left Top Track */}
      <Track
        title="Fintech"
        image_src="/image/tracks/track2.webp"
        image_alt="Turtle"
        widthClass="w-[25vw] md:w-[20vw]"
        imageWidthClass="w-[50vw] md:w-[45vw]"
        leftClass="left-[5vw] md:left-[2vw]"
        topClass="top-[30vh] md:top-[25vh]"
        rightClass="right-auto"
        bottomClass="bottom-auto"
      />

      {/* Right Top Track */}
      <Track
        title="Cybersecurity"
        image_src="/image/tracks/track3.webp"
        image_alt="Whale"
        widthClass="w-[30vw] md:w-[25vw]"
        imageWidthClass="w-[50vw] md:w-[45vw]"
        rightClass="right-[5vw] md:right-[2vw]"
        topClass="top-[30vh] md:top-[25vh]"
        leftClass="left-auto"
        bottomClass="bottom-auto"
      />

      {/* Left Bottom Track */}
      <Track
        title="Healthcare"
        image_src="/image/tracks/track4.webp"
        image_alt="Generic Fish"
        widthClass="w-[25vw] md:w-[20vw]"
        imageWidthClass="w-[50vw] md:w-[45vw]"
        leftClass="left-[5vw] md:left-[2vw]"
        bottomClass="bottom-[30vh] md:bottom-[25vh]"
        rightClass="right-auto"
        topClass="top-auto"
      />

      {/* Right Bottom Track */}
      <Track
        title="Automation"
        image_src="/image/tracks/track5.webp"
        image_alt="Crab"
        widthClass="w-[25vw] md:w-[20vw]"
        imageWidthClass="w-[50vw] md:w-[45vw]"
        rightClass="right-[5vw] md:right-[2vw]"
        bottomClass="bottom-[30vh] md:bottom-[25vh]"
        leftClass="left-auto"
        topClass="top-auto"
      />
    </div>
  );
};
