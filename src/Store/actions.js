// actions.js
export const searchCity = (city) => ({
  type: "SEARCH_CITY",
  payload: city,
});

export const setWeatherData = (weatherData) => ({
  type: "SET_WEATHER_DATA",
  payload: weatherData,
});

export const setError = (error) => ({
  type: "SET_ERROR",
  payload: error,
});

export const setTemperatureUnit = (unit) => ({
  type: "SET_TEMPERATURE_UNIT",
  payload: unit,
});
