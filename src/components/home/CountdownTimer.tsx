
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
          className="flex flex-col items-center justify-center bg-white/10 border border-[#e8b230]/40 rounded-lg px-1 py-3 md:p-4 w-[4.5rem] md:w-32 backdrop-blur-sm animate-pulse-glow"
        >
          <span className="font-countdown text-5xl md:text-7xl leading-none tracking-wide text-white tabular-nums [text-shadow:0_2px_16px_rgba(232,178,48,0.45)]">
            {String(item.value).padStart(2, "0")}
          </span>
          <span className="text-[0.6rem] md:text-xs uppercase tracking-[0.12em] md:tracking-[0.2em] text-[#e8b230] mt-2">
            {item.label}
          </span>
        </div>
      ))}
    </div>
  );
};

export default CountdownTimer;
