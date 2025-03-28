import { GENERAL_QUESTIONS, LOGISTICS_QUESTIONS } from '../consts'
import Accordion from './accordion'
import { Panel } from "./panel"
import { H1 } from "./typography"


export const FAQ = () => {
  return (
    <div
      className={`relative w-full h-[100vw]`}
      style={{
        backgroundImage: `url('/image/backgrounds/faqbackground.png')`,
        backgroundSize: "cover",
        backgroundPosition: "top",
      }}
    >
      <Panel className="h-full">
        <div className="absolute w-full top-[5vh] z-10">
          <H1 className='text-center mb-30 font-quicksand'>FAQ</H1>
        </div>
        {/* This container hosts the jellyfish images */}
        <JellyFish />

         {/* The two columns with custom widths */}
         <div className="absolute flex justify-between w-full left-1/2 -translate-x-1/2 top-[30%] md:top-[20%] z-30">
          {/* Empty Space - 1/7 width */}
          <div className="w-[14.2857%]" />
          
          {/* First Column - 2/7 width */}
          <div className="w-[28.5714%] pt-8 flex align-center flex-col max-w-[45vw] md:mr-4">
            <ListTitle title='General' />
            <Accordion
              items={GENERAL_QUESTIONS.map(question => ({
                title: question.title,
                content: question.content
              }))}
            />
          </div>
          
          {/* Empty Space (Distance between columns) - 1/7 width */}
          <div className="w-[14.2857%]" />
          
          {/* Second Column - 2/7 width */}
          <div className="w-[28.5714%] md:pt-8 flex align-center flex-col max-w-[45vw]">
            <ListTitle title='Logistics' />
            <Accordion
              items={LOGISTICS_QUESTIONS.map(question => ({
                title: question.title,
                content: question.content
              }))}
            />
          </div>
          
          {/* Empty Space - 1/7 width */}
          <div className="w-[14.2857%]" />
        </div>

        <img
          src='/images/Ray.png'
          alt='Ray'
          className='float2 absolute z-20 w-[30vw] right-[5vw] bottom-[0vw] md:bottom-[5vw] md:right-[5vw]'
        />
      </Panel>
    </div>
  )
}

export const ListTitle = ({ title }) => {
  return (
    <h2 className={'glow text-center mb-2 text-[#D4CDF4] text-[3vw] md:text-3xl font-quicksand font-bold brightness-125 tracking-wide'}>
      {title}
    </h2>
  )
}

export const JellyFish = () => (
  <div>
    <img
      src='/images/PinkJelly.png'
      alt='Pink Jellyfish'
      className='float1 absolute z-20 w-[20vw] left-[0vw] top-[vw]'
    />
    <img
      src='/images/BlueJelly.png'
      alt='Blue Jellyfish'
      className='float2 absolute z-20 w-[17vw] bottom-[5vw] left-[15vw]'
    />
  </div>
)

export const MusicNotes = () => (
  <div>
    <img
      src='/images/MusicNote.svg'
      alt='Music Note'
      className='w-6 absolute left-[16rem]'
    />
    <img
      src='/images/MusicNote.svg'
      alt='Music Note'
      className='w-12 absolute left-[20rem] top-12'
    />

    <img
      src='/images/MusicNote.svg'
      alt='Music Note'
      className='w-8 absolute right-[48%] bottom-16'
    />

    <img
      src='/images/MusicNote.svg'
      alt='Music Note'
      className='w-4 absolute right-[20%] bottom-40'
    />

    <img
      src='/images/MusicNote.svg'
      alt='Music Note'
      className='w-4 absolute right-60 bottom-20'
    />

    <img
      src='/images/MusicNote.svg'
      alt='Music Note'
      className='w-4 absolute right-12 bottom-48'
    />
  </div>
)
