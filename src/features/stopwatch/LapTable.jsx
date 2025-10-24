import formatTime from "./formatTime";

const LapTable = ({ laps }) => {
  return (
    <div className="mt-8 w-full max-w-md">
      <table className="w-full text-left border-collapse">
        <thead>
          <tr className="bg-gray-100 dark:bg-gray-800">
            <th className="px-4 py-2">Lap</th>
            <th className="px-4 py-2">Lap times</th>
            <th className="px-4 py-2">Overall time</th>
          </tr>
        </thead>
        <tbody>
          {laps.map(({ id, lapTime, overallTime }) => (
            <tr key={id} className="border-t dark:border-gray-700 tracking-widest">
              <td className="px-4 py-2">{id}</td>
              <td className="px-4 py-2">{formatTime(lapTime)}</td>
              <td className="px-4 py-2">{formatTime(overallTime)}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default LapTable;
