import Countdown from 'react-countdown';
import CountdownRenderer from './countdownRenderer';

export const Home = () => {
  return (
    <div className="flex flex-col items-center justify-center h-screen  bg-gradient-to-b from-home_bg1 to-home_bg2 text-white overflow-hidden w-full relative max-w-full">
      <img className="z-20 flex object-contain max-h-full h-48" src="/images/HackDuke.png" alt="Hack Duke"></img>
      <h1 className="text-2xl z-50"> 04.12.2025 </h1>
      <h1 className="mt-5 text-2xl z-50"> application closes in</h1>
      <Countdown date={new Date("2025-04-01T23:59:00")} renderer={CountdownRenderer} />
      <a href='https://portal.hackduke.org/' className='text-2xl bg-gradient-to-b from-[#A414B5] to-[#540A5D] pl-8 pr-8 pt-1 pb-1 rounded-xl mt-5 z-50 transform transition duration-200 hover:scale-105'>Apply Now!</a>
      {/* waves */}
      <section className="waves-container bottom-[0vw]">
        <div className="wave wave1"></div>
        <div className="wave wave2"></div>
        {/* <div className="wave wave3"></div>
        <div className="wave wave4"></div> */}
      </section>
      <div className="buoy-wrapper overflow-hidden absolute w-full h-full">
        <img src="/images/Buoy.svg" alt="Description" className="buoy z-10 min-w-[60rem] " />
      </div>
      <img src="/images/HomeStars.png" alt="Description" className="motion-preset-slide-down motion-duration-2000 order-first absolute top-12 left-1/2 transform -translate-x-1/2 w-full max-h-45" />
      {/* <img 
        src="/images/CodeForGood.png" 
        alt="Code For Good" 
        className="z-50 absolute-top-0 w-60" 
      /> */}
      {/* <img 
        src="/images/Date.png" 
        alt="Description" 
        className="z-50 absolute-top-0 w-50" 
      /> */}
    </div>
  )
}


