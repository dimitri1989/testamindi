import { useState, useEffect } from 'react';

const Clock = () => {
  const [time, setTime] = useState(new Date());

  useEffect(() => {
    const intervalId = setInterval(() => {
      setTime(new Date());
    }, 1000);

    // გაწვდოს ინტერვალი, როდესაც კომპონენტი დემონტაჟდება
    return () => clearInterval(intervalId);
  }, []);

  const hours = time.getHours().toString().padStart(2, '0');
  const minutes = time.getMinutes().toString().padStart(2, '0');
  const seconds = time.getSeconds().toString().padStart(2, '0');

  return (
    <div>
      {hours}:{minutes}:{seconds}
    </div>
  );
};

export default Clock;