const TimerDisplay = ({ timer }: { timer: string }) => {
  return (
    <section className="flex flex-col gap-3">
      <div className="font-bold text-r-7xl">{timer}</div>
      <button className="p-2 font-semibold border-2 border-black rounded-xl text-r-4xl">
        Start
      </button>
    </section>
  );
};
export default TimerDisplay;
