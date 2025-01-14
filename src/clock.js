import React, { useState, useEffect } from 'react';
import './clock.css'; // Importing CSS for styling

const Clock = () => {
  const [time, setTime] = useState(new Date());

  useEffect(() => {
    const timer = setInterval(() => {
      setTime(new Date());
    }, 1000);

    // Cleanup the interval when the component unmounts
    return () => clearInterval(timer);
  }, []);

  // Format the time into HH:MM:SS
  const hours = time.getHours().toString().padStart(2, '0');
  const minutes = time.getMinutes().toString().padStart(2, '0');
  const seconds = time.getSeconds().toString().padStart(2, '0');

  return (
    <div className="clock">
      {hours}:{minutes}:{seconds}
    </div>
  );
};

export default Clock;
