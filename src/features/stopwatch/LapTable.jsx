import { motion, AnimatePresence } from "framer-motion";
import formatTime from "./formatTime";

const LapTable = ({ laps }) => {
  return (
    <div className="mt-8 w-full max-w-md">
      <table className="w-full text-left border-collapse">
        <thead>
          <tr className="bg-gray-100 dark:bg-gray-800">
            <th className="px-4 py-2">Lap</th>
            <th className="px-4 py-2">Lap Time</th>
            <th className="px-4 py-2">Overall Time</th>
          </tr>
        </thead>
        <tbody>
          <AnimatePresence>
            {laps.map(({ id, lapTime, overallTime }) => (
              <motion.tr
                key={id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                transition={{ duration: 0.4, ease: "easeOut" }}
                className="border-t dark:border-gray-700 tracking-widest"
              >
                <td className="px-4 py-2">{id}</td>
                <td className="px-4 py-2">{formatTime(lapTime)}</td>
                <td className="px-4 py-2">{formatTime(overallTime)}</td>
              </motion.tr>
            ))}
          </AnimatePresence>
        </tbody>
      </table>
    </div>
  );
};

export default LapTable;
