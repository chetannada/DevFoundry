const TimerDisplay = ({ time }) => {
  const minutes = String(Math.floor(time / 60000)).padStart(2, "0");
  const seconds = String(Math.floor((time % 60000) / 1000)).padStart(2, "0");
  const milliseconds = String(Math.floor((time % 1000) / 10)).padStart(2, "0");

  return (
    <div className="absolute text-3xl font-mono">
      {minutes}:{seconds}:{milliseconds}
    </div>
  );
};

export default TimerDisplay;
