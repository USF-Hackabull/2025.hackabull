export const BackdropTopAnchor = () => {
    return (
        <div className="top-0 left-0"> {/* Anchored to top of the page */}
        <img
            src="/images/WallsBack.png"
            alt="Background Wall"
            className="absolute top-0 left-0 w-screen h-auto z-0"
        />
        <div className="absolute top-[10vw] left-[0vw]">
            <LeftWall />
        </div>
        <div className='absolute top-[50vw] right-[0vw]'>
            <RightWall />
        </div>
        <img
            src="/images/AboutLighting.svg"
            alt="lighting for the about section"
            className="absolute w-screen z-0 left-[0vw] top-[0vw]"
        />
        <img
            src="/images/Tracks Lighting.png"
            alt="Tracks Gradient Lighting"
            className="absolute w-[50vw] z-0 left-[0vw] top-[35vw]"
        />
        <img
            src="/images/Speaker Lighting.svg"
            alt="Speaker Gradient Lighting"
            className="absolute w-screen z-0 left-[0vw] top-[70vw]"
        />

        <img
            src="/images/Schedule Lighting.png"
            alt="Schedule Gradient Lighting"
            className="absolute w-screen z-0 left-[0vw] top-[140vw]"
        />
    </div>

    
    )
}



export const LeftWall = () => {
    return (
        <>
            <img
                src="/images/LeftCliffFrontTop.png"
                alt="left front top cliff"
                className="absolute z-10 left-0 w-[20vw] max-w-none h-auto"
            />
            <div className="absolute top-[30vw]">
                <AboutSpeakerGroup />
            </div>
            <div className="absolute top-[180vw]"> {/* Probably should be percentages */}
                <ScheduleLeftSpeakerGroup />
            </div>
            <img src="/images/StrobeLight1.png" 
                alt="Strobe Light 1" 
                className="strobe3 absolute z-10 left-0 w-screen max-w-none top-[80vw] h-auto"/>
        </>
    )
}

export const RightWall = () => {
    return (
        <div className="absolute right-0 w-[20vw]">
            <img
                src="/images/RightCliffFrontTop.png"
                alt="right front top cliff"
                className="absolute z-20 right-0 w-[100%] max-w-none h-auto"
            />
            <img src="/images/ScheduleRightSpeaker.png" alt="About Left Speaker"
                className='absolute z-10 right-[2%] w-auto h-[18.75vw]'
                style={{ transform: 'translateY(800%)' }}
            />
            <img
                src="/images/Starfish.png"
                alt="starfish"
                className="absolute z-30 right-[40%] h-[18.75vw]"
                style={{ transform: 'translateY(940%)' }}
            />
            <img src="/images/Strobe Light 3.svg" 
                alt="Strobe Light 2" 
                className="strobe1 absolute z-20 right-0 w-screen max-w-none top-[120vw] h-auto"/>
            <img src="/images/Strobe Light 3.svg" 
                alt="Strobe Light 3" 
                className="strobe2 absolute z-20 right-0 w-screen max-w-none top-[112vw] h-auto"/>

            <img src="/images/Strobe Light 4.svg" 
                alt="Strobe Light 4" 
                className="strobe1 absolute z-20 right-0 w-screen max-w-none top-[200vw] h-auto"/>
            
            <img src="/images/StrobeLight4Lighting.png" 
                alt="Strobe Light 4 Light" 
                className="strobe1 absolute z-20 right-0 w-[7vw] max-w-none top-[200vw] h-auto"/>
        </div>
    )
}

export const AboutSpeakerGroup = () => {
    return (
        <div className="absolute w-[30vw]">
            <img
                src="/images/AboutLeftSpeaker.png"
                alt="About Left Speaker"
                className="absolute w-[60%] max-w-none h-auto z-20"
            />
            <img
                src="/images/AboutRedCoral.png"
                alt="Red Coral decoration"
                className="absolute w-[100%] max-w-none h-auto z-10"
                style={{ transform: 'translateY(-50%)' }}
            />
            <img
                src="/images/AboutYellowCoral.png"
                alt="Yellow Coral"
                className="absolute w-[50%] max-w-none h-auto z-30"
                style={{ transform: 'translateY(40%)' }}
            />
           
        </div>
    )
}

export const ScheduleLeftSpeakerGroup = () => {
    return (
        <div className="absolute w-[20vw]">
            <img src="/images/ScheduleLeftSpeaker.png" alt="About Left Speaker"
                className='absolute w-[100%] z-10'
            />
            <img src="/images/ScheduleYellowCoral.png" alt="Yellow Coral"
                className='absolute w-[100%] z-20'
                style={{ transform: 'translateY(20%)' }}
            />
        </div>
    )
}