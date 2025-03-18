// import { Panel } from "./panel";
// import { H1 } from "./typography";

// const ScheduleItem = ({ time, event }) => {
//   const formattedEvent =
//     event.length > 28
//       ? `${event.slice(0, 28)}\n${event.slice(28)}`
//       : event;

//   return (
//     <div className="flex items-start">
//       <span className="text-[1.45vw] md:text-[1.05vw] text-[#FBF9F7] font-bold w-[13vw]">{time}</span>
//       <span 
//         className="text-[1.45vw] md:text-[1.05vw] text-[#FBF9F7] whitespace-pre-line"
//       >
//         {formattedEvent}
//       </span>
//     </div>
//   );
// };


// const DaySchedule = ({ date, events, isSecondDay }) => {
//   return (
//     <div className={`${isSecondDay ? 'mt-2 md:mt-0' : ''}`}>
//       <h2 className={`text-[3.5vw] text-[#D5CFFFF2] ${isSecondDay ? 'ml-16 md:ml-0' : ''}`}>
//         {date}
//       </h2>
//       <div className={`space-y-[1vw] ${isSecondDay ? 'ml-16 md:ml-0' : ''}`}>
//         {events.map((event, index) => (
//           <ScheduleItem key={index} time={event.time} event={event.event} />
//         ))}
//       </div>
//     </div>
//   )
// }

// export const Schedule = () => {
//   const day1Events = [
//     { time: '09:00-11:00 am', event: 'Student Check-in' },
//     { time: '10:30-11:30 am', event: 'Opening Ceremony' },
//     { time: '11:30 am', event: 'Hacking Starts'},
//     { time: '11:30-12:30 pm', event: 'Team Formation & Lunch' },
//     { time: '11:30-12:30 pm', event: 'MLH Tech Together Meetup @ Rand' },
//     { time: '01:00-02:00 pm', event: 'Sponsor Fair @ Kirby Winter Garden'},
//     { time: '02:00-03:00 pm', event: 'MLH Co-Pilot Workshop @ Rand'},
//     { time: '03:00-04:00 pm', event: 'AI/LLM Workshop @ Sauer' },
//     { time: '04:00-05:00 pm', event: 'UI/UX Workshop @ Rand' },
//     { time: '05:00-06:00 pm', event: 'Cursor Workshop: Supercharge your Hackathon project with AI @ Sauer' },
//     { time: '06:00-07:00 pm', event: 'Dinner' },
//     { time: '07:00-09:00 pm', event: 'Poker Tournament @ Jenkins' },
//     { time: '07:00-09:00 pm', event: 'Games @ Sauer' },
//     { time: '11:00-12:00 am', event: 'Stargazing @ Garden' },
//   ]
  
//   const day2Events = [
//     { time: '12:00-01:30 am', event: 'Midnight Breakfast @ Fuqua' },
//     { time: '10:00-1:00 pm', event: 'Brunch' },
//     { time: '11:30 am', event: 'Hacking Ends' },
//     { time: '11:45-12:30 pm', event: 'Pitching Workshop @ Sauer' },
//     { time: '2:00-3:00 pm', event: 'Judging' },
//     { time: '3:00 pm', event: 'Closing Ceremony @ Geneen Auditorium' }
//   ]

//   return (
//     <Panel className="h-[90vw] md:h-[60vw]">
//       <div className='z-10 w-screen text-center mb-[2vw]'>
//         <H1>Schedule</H1>
//       </div>

//       <div className='w-screen flex justify-center'>
//         <div className='flex flex-col md:flex-row gap-[3vw] max-w-[90vw] md:max-w-none'>
//           <DaySchedule date="2/8/25" events={day1Events} isSecondDay={false} />
//           <DaySchedule date="2/9/25" events={day2Events} isSecondDay={true} />
//         </div>
//       </div>
//     </Panel>
// )
// }

import { Panel } from "./panel";
import { H1, P } from "./typography";

export const Schedule = () => {
  return (
    <Panel>
      <div className="absolute z-20 w-[40vw] right-[30vw] top-[20vw] text-center" /*className="absolute z-20 w-[40vw] right-[6vw] top-[7vw] text-center"*/>
        <H1>Schedule</H1>
        <P>
          Coming soon!
        </P>
      </div>

      {/*<div className="absolute w-[60vw] left-[-7vw] top-[-5vw]">
        <SpeakerShark />
      </div>*/}

      <img
        src="/images/fishy.png"
        alt="fish"
        className="absolute z-20 h-[15vw]"
      />

    </Panel>
  );
};

export const SpeakerShark = () => {
  return (
    <div style={{ position: 'relative', width: '100%' }}>
      <img
        src="/images/SpeakerSharkFrame.png"
        alt="Speaker Shark Frame"
        style={{ width: '100%' }}
      />
      <img
        src="/images/SpeakerSharkTeethOverlay.png"
        alt="Speaker Shark Teeth"
        style={{
          position: 'absolute',
          top: '39%',
          left: '48%',
          transform: 'translateX(-50%)',
          width: '49%',
          zIndex: 10,
        }}
      />
      <img
        src="/images/Schedule.png"
        alt="Schedule"
        style={{
          position: 'absolute',
          top: '43%',
          left: '48%',
          transform: 'translateX(-50%)',
          width: '43%',
          borderRadius: '50%',
        }}
      />
    </div>
  );
}