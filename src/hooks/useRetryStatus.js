import { useState, useEffect, useRef } from "react";

const useRetryStatus = (totalRetries, retryDelayMs) => {
  const [status, setStatus] = useState(null);
  const timerRef = useRef(null);

  const start = () => {
    let attempt = 1;
    setStatus({ attempt, total: totalRetries, message: "Summarizing..." });

    const scheduleNext = () => {
      const delay = retryDelayMs * attempt;
      timerRef.current = setTimeout(() => {
        attempt++;
        if (attempt <= totalRetries) {
          setStatus({
            attempt,
            total: totalRetries,
            message: `Retrying attempt ${attempt} of ${totalRetries}...`,
          });
          scheduleNext(); // schedule next with longer delay
        }
      }, delay);
    };

    scheduleNext();
  };

  const stop = () => {
    if (timerRef.current) clearTimeout(timerRef.current);
    setStatus(null);
  };

  useEffect(() => {
    return () => {
      if (timerRef.current) clearTimeout(timerRef.current);
    };
  }, []);

  return { status, start, stop };
};

export default useRetryStatus;
