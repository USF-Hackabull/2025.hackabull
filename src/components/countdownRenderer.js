// Dark green text (#2c5102) with website's teal/gold theme
import React, { useState } from "react";

const CountdownRenderer = ({days, hours, minutes, seconds}) => {
  const [isHovered, setIsHovered] = useState(false);
  
  return (
    <div 
      style={{
        color: '#2c5102',
        fontSize: '1.5rem',
        fontWeight: 'bold',
        margin: '0.5rem 0',
        padding: '0.5rem',
        backgroundColor: isHovered ? 'rgba(140, 197, 197, 0.75)' : 'rgba(140, 197, 197, 0.65)',
        borderRadius: '12px',
        display: 'inline-block',
        textShadow: '0 1px 2px rgba(255, 255, 255, 0.7)',
        cursor: 'default',
        transition: 'all 0.3s ease',
        boxShadow: isHovered ? '0 0 15px rgba(250, 240, 190, 0.5)' : '0 0 8px rgba(0, 0, 0, 0.2)',
        border: '1px solid rgba(250, 240, 190, 0.3)'
      }}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      {days} days {hours} hours {minutes} minutes {seconds} seconds
    </div>
  );
};

export default CountdownRenderer;