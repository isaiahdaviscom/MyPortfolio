import { useState, useEffect } from 'react';
import style from './style.module.css';

function OnlineStatusIndicator() {
  const [status, setStatus] = useState('checking');

  // const isDST = (date: Date) => {
  //   const year = date.getFullYear();
  //   const jan = new Date(year, 0, 1).getTimezoneOffset();
  //   const jul = new Date(year, 6, 1).getTimezoneOffset();
  //   return Math.max(jan, jul) !== date.getTimezoneOffset();
  // }

  useEffect(() => {
    function updateStatus() {
      // Check online statusF
      if (!window.navigator.onLine) {
        setStatus('offline');
        return;
      }

      // Check the time and weekday
      const centralTime = new Date(new Date().toLocaleString("en-US", { timeZone: "America/Chicago" }));
      const hour = centralTime.getHours();
      const dayOfWeek = centralTime.getDay(); // 0 for Sunday, 1 for Monday, ... 6 for Saturday

      if (hour >= 9 && hour < 17 && dayOfWeek >= 1 && dayOfWeek <= 5) {
        setStatus('online');
      } else {
        setStatus('offline');
      }
    }

    updateStatus();

    // Check every minute
    const interval = setInterval(updateStatus, 60 * 1000);

    // Cleanup on component unmount
    return () => clearInterval(interval);
  }, []);

  return (
    <div className='online-status-indicator'>
      <div className={`${style.status} ${style[status]}`} title={`Status: ${status}`}></div>
      {/* {isDST(new Date()) && <span style={{ color: 'blue' }}>(Daylight Saving Time Active)</span>} */}
    </div>
  );
}

export default OnlineStatusIndicator;
