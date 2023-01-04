import { useEffect, useState } from "react";

const useCountDown = (futureTime) => {
  const time1 = new Date().getTime();
  const time2 = new Date(futureTime).getTime(); // "Dec/27/2022"
  const difference = time2 - time1;
  const [time, setTime] = useState({
    Day: `00`,
    Hours: `00`,
    Minutes: `00`,
    Seconds: `00`,
  });
  useEffect(() => {
    const interval = setInterval(() => {
      setTime({
        Day: Math.floor(difference / (1000 * 60 * 60 * 24)),
        Hours: Math.floor(
          (difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
        ),
        Minutes: Math.floor((difference % (1000 * 60 * 60)) / (1000 * 60)),
        Seconds: Math.floor((difference % (1000 * 60)) / 1000),
      });
    }, 1000);
    return () => {
      clearInterval(interval);
    };
  }, [time]);

  return time;
};

export default useCountDown;
