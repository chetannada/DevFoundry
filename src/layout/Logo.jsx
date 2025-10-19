import { useTheme } from "../context/ThemeContext";
import useWindowSize from "../hooks/useWindowSize";

const Logo = () => {
  const windowSize = useWindowSize();
  const { theme } = useTheme();

  const renderImage = () => {
    return theme === "dark" ? (
      <img
        src="/images/devFoundry-logo-dark.png"
        alt="DevFoundry Logo"
        className="h-10 w-10 object-contain"
      />
    ) : (
      <img
        src="/images/devFoundry-logo-light.png"
        alt="DevFoundry Logo"
        className="h-10 w-10 object-contain"
      />
    );
  };

  return (
    <>
      {windowSize.width > 640 ? (
        <h1 className="text-2xl max2xs:text-xl max3xs:text-base font-semibold tracking-widest">
          <span className="text-secondary-light dark:text-secondary-dark">dev</span>
          foundry
        </h1>
      ) : (
        <>{renderImage()}</>
      )}
    </>
  );
};

export default Logo;
