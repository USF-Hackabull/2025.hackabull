import { GENERAL_QUESTIONS, LOGISTICS_QUESTIONS } from '../consts'
import Accordion from './accordion'
import { H1 } from "./typography"

export const FAQ = () => {
  return (
    <div
      className="relative w-full py-16"
      style={{
        backgroundImage: `url('/image/backgrounds/faqbackground.png')`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
      }}
    >
      <div className="container mx-auto px-4 relative">
        <H1 className="text-center mb-12 font-quicksand">FAQ</H1>
        
        {/* Decorative elements positioned away from text */}
        <div className="pointer-events-none absolute top-0 left-0 w-full h-full overflow-hidden">
          <img
            src='/images/PinkJelly.png'
            alt='Pink Jellyfish'
            className='float1 absolute z-10 w-[10vw] max-w-[100px] top-0 left-0'
          />
          <img
            src='/images/BlueJelly.png'
            alt='Blue Jellyfish'
            className='float2 absolute z-10 w-[10vw] max-w-[100px] bottom-[2%] right-[2%]'
          />
          <img
            src='/images/Ray.png'
            alt='Ray'
            className='float2 absolute z-10 w-[15vw] max-w-[200px] bottom-0 right-0 opacity-60'
          />
        </div>

        <div className="flex flex-col md:flex-row justify-center gap-8 md:gap-16 max-w-6xl mx-auto mb-12 relative z-20">
          <div className="w-full md:w-1/2 bg-white/10 backdrop-blur-sm rounded-lg shadow-lg p-6">
            <h2 className="text-center mb-6 text-[#D4CFF4] text-2xl md:text-3xl font-quicksand font-bold tracking-wide">
              General
            </h2>
            <Accordion
              items={GENERAL_QUESTIONS.map(question => ({
                title: question.title,
                content: question.content
              }))}
            />
          </div>
          
          <div className="w-full md:w-1/2 bg-white/10 backdrop-blur-sm rounded-lg shadow-lg p-6">
            <h2 className="text-center mb-6 text-[#D4CFF4] text-2xl md:text-3xl font-quicksand font-bold tracking-wide">
              Logistics
            </h2>
            <Accordion
              items={LOGISTICS_QUESTIONS.map(question => ({
                title: question.title,
                content: question.content
              }))}
            />
          </div>
        </div>
      </div>
    </div>
  )
}

export const MusicNotes = () => (
  <div className="pointer-events-none absolute top-0 left-0 opacity-25">
    <img
      src='/images/MusicNote.svg'
      alt='Music Note'
      className='w-6 absolute left-[5%] top-[5%]'
    />
    <img
      src='/images/MusicNote.svg'
      alt='Music Note'
      className='w-4 absolute right-[5%] top-[10%]'
    />
    <img
      src='/images/MusicNote.svg'
      alt='Music Note'
      className='w-8 absolute left-[10%] bottom-[10%]'
    />
  </div>
)
