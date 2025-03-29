const CountdownRenderer = ({days, hours, minutes, seconds}) => {
    return (
        <div 
            className="text-xl z-50 mt-[1.5] md:max-w-screen max-w-[50%] text-center md:text-2xl font-bold"
            style={{ 
                color: '#FFFFFF',
                textShadow: '0 2px 4px rgba(0,0,0,0.8), 0 0 10px rgba(0,0,0,0.5)'
            }}
        >
            <p>{days} days {hours} hours {minutes} minutes {seconds} seconds</p>
        </div>
    )
}

export default CountdownRenderer