const TickCircle = ({ activeIndex, totalTicks }) => {
  return (
    <>
      {[...Array(totalTicks)].map((_, i) => {
        const angle = (i / totalTicks) * 360;
        const isActive = i === activeIndex;
        return (
          <div
            key={i}
            className={`absolute h-4 rounded-sm ${
              isActive
                ? "w-1.5 bg-secondary-light dark:bg-secondary-dark"
                : "w-1 bg-border-light dark:bg-border-dark"
            }`}
            style={{
              transform: `rotate(${angle}deg) translate(0, -120px)`,
              transformOrigin: "center",
            }}
          />
        );
      })}
    </>
  );
};

export default TickCircle;
