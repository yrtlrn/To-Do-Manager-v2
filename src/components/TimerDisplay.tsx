const TimerDisplay = ({ timer }: { timer: string }) => {
  return (
    <section className="flex flex-col gap-3">
      <div className="font-bold text-r-7xl text-text dark:text-dark_text">
        {timer}
      </div>
      <div className="relative transition duration-[200] ease-in-out group hover:scale-[1.2]">
        <div className="absolute transition duration-1000 rounded-lg opacity-25 -inset-1 bg-accent dark:bg-dark_accent blur group-hover:opacity-100 group-hover:duration-200"></div>
        <button className="relative w-full p-2 font-semibold border-2 border-black text-r-4xl rounded-xl text-text dark:text-dark_text bg-primary dark:bg-dark_primary">
          Start
        </button>
      </div>
    </section>
  );
};
export default TimerDisplay;
