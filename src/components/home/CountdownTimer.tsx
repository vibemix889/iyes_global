
import { useEffect, useState } from "react";

interface TimeLeft {
  days: number;
  hours: number;
  minutes: number;
  seconds: number;
}

const getTimeLeft = (targetDate: number): TimeLeft => {
  const distance = Math.max(targetDate - Date.now(), 0);
  return {
    days: Math.floor(distance / (1000 * 60 * 60 * 24)),
    hours: Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)),
    minutes: Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60)),
    seconds: Math.floor((distance % (1000 * 60)) / 1000),
  };
};

const CountdownTimer = () => {
  // Set this to your next event date
  const targetDate = new Date("March 9, 2027 09:00:00").getTime();
  const [timeLeft, setTimeLeft] = useState<TimeLeft>(() => getTimeLeft(targetDate));

  useEffect(() => {
    const interval = setInterval(() => {
      if (targetDate - Date.now() < 0) {
        clearInterval(interval);
        return;
      }
      setTimeLeft(getTimeLeft(targetDate));
    }, 1000);

    return () => clearInterval(interval);
  }, [targetDate]);

  return (
    <div className="flex flex-wrap justify-center gap-3 md:gap-6">
      {[
        { label: "Days", value: timeLeft.days },
        { label: "Hours", value: timeLeft.hours },
        { label: "Minutes", value: timeLeft.minutes },
        { label: "Seconds", value: timeLeft.seconds },
      ].map((item) => (
        <div
          key={item.label}
          className="flex flex-col items-center justify-center bg-white/10 border border-[#e8b230]/40 rounded-lg p-3 md:p-4 w-20 md:w-28 backdrop-blur-sm animate-pulse-glow"
        >
          <span className="text-2xl md:text-4xl font-heading text-white">
            {String(item.value).padStart(2, "0")}
          </span>
          <span className="text-xs md:text-sm text-white/70 mt-1">
            {item.label}
          </span>
        </div>
      ))}
    </div>
  );
};

export default CountdownTimer;
