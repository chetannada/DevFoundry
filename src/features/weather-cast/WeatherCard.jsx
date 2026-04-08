import { WiDaySunny, WiCloud, WiRain } from "react-icons/wi";

const WeatherCard = ({ weatherData, loading }) => {
  if (loading) {
    return (
      <div className="flex justify-center items-center py-10">
        <div className="animate-spin rounded-full h-12 w-12 border-t-4 border-b-4 border-secondary-light"></div>
        <p className="ml-4 text-lg font-medium text-text-light dark:text-text-dark">
          Loading weather data...
        </p>
      </div>
    );
  }

  if (!weatherData) return null;

  const { name, main, weather: details } = weatherData;

  const iconMap = {
    Clear: <WiDaySunny size={48} className="text-secondary-light" />,
    Clouds: <WiCloud size={48} className="text-secondary-light" />,
    Rain: <WiRain size={48} className="text-secondary-light" />,
  };

  return (
    <div
      className="px-8 py-10 w-full max-w-180 mx-auto animate-fadeIn 
        bg-card-light/70 dark:bg-card-dark/70 backdrop-blur-md 
        border border-border-light dark:border-border-dark 
        rounded-2xl shadow-lg"
    >
      <h2 className="text-3xl font-semibold text-center mb-4">{name}</h2>

      <div className="flex justify-center">
        {iconMap[details[0].main] || <WiDaySunny size={48} />}
      </div>

      <p className="text-center text-lg mb-4 transition-transform duration-300 hover:scale-105">
        {details[0].main} - {details[0].description}
      </p>

      <p className="text-center text-5xl font-extrabold mb-4 text-secondary-light drop-shadow-md">
        {main.temp}°C
      </p>

      <p className="text-center text-md mb-2">
        Min: {main.temp_min}°C | Max: {main.temp_max}°C
      </p>
      <p className="text-center text-md">Humidity: {main.humidity}%</p>
    </div>
  );
};

export default WeatherCard;
