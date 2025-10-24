import formatTime from "./formatTime";

const TimerDisplay = ({ time }) => {
  return <div className="absolute text-3xl font-mono">{formatTime(time)}</div>;
};

export default TimerDisplay;
