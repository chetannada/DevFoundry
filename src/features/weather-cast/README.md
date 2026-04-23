## ⛅ Weather Cast

A dynamic and responsive weather forecasting app built with **React.js**, **JavaScript**, and **TailwindCSS**. This tool allows users to search for cities across countries and view real-time weather conditions with clean UI and interactive components.

- 💻 [Source Code](/src/features/weather-cast)
- 🌐 [Live Demo](https://devfoundry.netlify.app/weather-cast) ⛅

### 🎯 Challenge Overview

#### 🕒 Estimated Completion Time: 45–60 minutes

#### 🛠️ Task Overview:

Build a weather application that fetches and displays current weather data for selected cities. The UI should be intuitive, responsive, and provide clear feedback during loading or error states.

#### 📌 Requirements:

- 🌍 **Country & City Selection**:
  - Dropdowns to select a country and city.
  - Dynamic city list based on selected country.
- 🔍 **Search Functionality**:
  - Trigger weather data fetch for the selected city.
  - Error handling with user-friendly messages.
- 🌦️ **Weather Display**:
  - Show temperature, humidity, min/max values.
  - Display weather condition icons (sunny, cloudy, rainy).
- ⏳ **Loading State**:
  - Animated spinner with loading message.
- ⚛️ **State Management**:
  - Use React hooks for managing weather data, errors, and selections.
- 🎨 **Styling**:
  - Modern, minimal layout with TailwindCSS animations and transitions.

#### 🔍 Development Focus:

- **Component Modularity** → Separate components for search form, weather card, and error handling.
- **UX Clarity** → Smooth transitions, clear error messages, and responsive design.
- **Performance** → Efficient API calls and state updates.
- **Accessibility** → Semantic HTML, keyboard-friendly dropdowns, and clear focus states.

#### 🌟 Additional Considerations:

- Add support for multiple weather conditions (snow, thunderstorm, etc.).
- Integrate geolocation to auto-detect user’s current city.
- Provide extended forecasts (hourly/daily).
- Allow customization of temperature units (°C/°F).
