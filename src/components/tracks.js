import { Panel } from "./panel"
import { H1 } from "./typography"

const Track = ({ title, image_src, image_alt, widthClass, leftClass, bottomClass, rightClass, topClass, imageWidthClass, className = "" }) => {
  // Pass class names instead of, e.g., vw units because Tailwind has issues with template literals
  return (
    <div className={`absolute z-20 flex flex-col space-y-2 items-center ${widthClass} ${leftClass} ${bottomClass} ${rightClass} ${topClass} ${className}`}>
      <h3 className="text-sm md:text-3xl text-white text-center">{title}</h3>
      <img src={image_src} alt={image_alt} className={imageWidthClass}/>
    </div>
  )
}

export const Tracks = () => {
  // TODO: Lighting
  // TODO: Responsiveness
  return (
    <Panel>
      <H1 className="text-center mb-8">Tracks</H1>
      
      {/* Center Track */}
      <Track 
        title="Cybersecurity"
        image_src="/images/TracksCrab.svg"
        image_alt="Crab"
        widthClass="w-[30vw]"
        imageWidthClass="w-[14vw]"
        leftClass="left-1/2"
        topClass="top-1/2"
        rightClass="right-auto"
        bottomClass="bottom-auto"
        className="transform -translate-x-1/2 -translate-y-1/2"
      />
      
      {/* Left Top Track */}
      <Track 
        title="Fintech"
        image_src="/images/TracksTurtle.svg"
        image_alt="Turtle"
        widthClass="w-[25vw]"
        imageWidthClass="w-[15vw]"
        leftClass="left-[10vw]"
        topClass="top-[15vh]"
        rightClass="right-auto"
        bottomClass="bottom-auto"
      />
      
      {/* Right Top Track */}
      <Track
        title="Healthcare"
        image_src="/images/TracksWhale.svg"
        image_alt="Whale"
        widthClass="w-[30vw]"
        imageWidthClass="w-[22vw]"
        rightClass="right-[10vw]"
        topClass="top-[15vh]"
        leftClass="left-auto"
        bottomClass="bottom-auto"
      />
      
      {/* Left Bottom Track */}
      <Track 
        title="Sustainability" 
        image_src="/images/TracksGenericFish.svg" 
        image_alt="Generic Fish" 
        widthClass="w-[25vw]" 
        imageWidthClass="w-[18vw]"
        leftClass="left-[10vw]" 
        bottomClass="bottom-[15vh]" 
        rightClass="right-auto" 
        topClass="top-auto" 
      />
      
      {/* Right Bottom Track */}
      <Track
        title="Automation"
        image_src="/images/Crab.png"
        image_alt="Crab"
        widthClass="w-[25vw]"
        imageWidthClass="w-[18vw]"
        rightClass="right-[10vw]"
        bottomClass="bottom-[15vh]"
        leftClass="left-auto"
        topClass="top-auto"
      />
    </Panel>
  )
}
