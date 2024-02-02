import React, { useState, useEffect } from 'react';

function Clock({ is24Hour }) {
  const [time, setTime] = useState(new Date().toLocaleTimeString([], { hour12: !is24Hour }));
  const [date, setDate] = useState(new Date().toLocaleDateString());

  useEffect(() => {
    const timer = setInterval(() => {
      setTime(new Date().toLocaleTimeString([], { hour12: !is24Hour }));
      setDate(new Date().toLocaleDateString());
    }, 1000);

    return () => clearInterval(timer);
  }, [is24Hour]); // This ensures the effect is run again if is24Hour changes

  return (
    <div className="Clock">
      <h2>Current Date:</h2>
      <p>{date}</p>
      <h2>Current Time:</h2>
      <p>{time}</p>
    </div>
  );
}

export default Clock;
