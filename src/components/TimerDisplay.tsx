import { useEffect, useState } from "react";

const TimerDisplay = () => {
  const [timer, setTimer] = useState(0);
  const [timerGoing, setTimerGoing] = useState(false);

  
  useEffect(() => {
    const counter = setInterval(function () {
      if (timerGoing) {
        setTimer((prev) => prev + 1);
      }
    }, 1000);
    console.log("Ran");
    return () => clearInterval(counter);
  }, [timerGoing]);

  return (
    <section className="flex flex-col gap-3">
      <div className="font-bold text-r-7xl text-text dark:text-dark_text">
        {new Date(timer * 1000)
          .toISOString()
          .substring(11, 19)}
      </div>
      <div className="relative transition duration-[200] ease-in-out group hover:scale-[1.2]">
        {timerGoing ? (
          <>
            <div className="absolute transition duration-1000 rounded-lg opacity-25 -inset-1 bg-accent dark:bg-dark_accent blur group-hover:opacity-100 group-hover:duration-200"></div>
            <button
              className="relative w-full p-2 font-semibold border-2 border-black text-r-4xl rounded-xl text-text dark:text-dark_text bg-primary dark:bg-dark_primary"
              onClick={() => setTimerGoing(false)}
            >
              Pause
            </button>
          </>
        ) : (
          <>
            <div className="absolute transition duration-1000 rounded-lg opacity-25 -inset-1 bg-accent dark:bg-dark_accent blur group-hover:opacity-100 group-hover:duration-200"></div>
            <button
              className="relative w-full p-2 font-semibold border-2 border-black text-r-4xl rounded-xl text-text dark:text-dark_text bg-primary dark:bg-dark_primary"
              onClick={() => setTimerGoing(true)}
            >
              {timer > 0 ? "Resume" : "Start"}
            </button>
          </>
        )}
      </div>
      <div className="relative transition duration-[200] ease-in-out group hover:scale-[1.2]">
        {timer > 0 && !timerGoing && (
          <>
            <div className="absolute transition duration-1000 rounded-lg opacity-25 -inset-1 bg-accent dark:bg-dark_accent blur group-hover:opacity-100 group-hover:duration-200"></div>
            <button
              className="relative w-full p-2 font-semibold border-2 border-black text-r-4xl rounded-xl text-text dark:text-dark_text bg-primary dark:bg-dark_primary"
              onClick={() => {
                setTimerGoing(false);
                setTimer(0);
              }}
            >
              Reset
            </button>
          </>
        )}
      </div>
    </section>
  );
};
export default TimerDisplay;
