// reducers.js
const initialState = {
  recentSearches: [],
  weatherData: null,
  error: null,
  temperatureUnit: "Celsius", // Default unit
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case "SEARCH_CITY":
      const newCity = action.payload;
      // last 5 recent searches
      const updatedRecentSearches = [
        newCity,
        ...state.recentSearches.slice(0, 4),
      ];
      return {
        ...state,
        recentSearches: updatedRecentSearches,
      };

    case "SET_WEATHER_DATA":
      return {
        ...state,
        weatherData: action.payload,
      };

    case "SET_ERROR":
      return {
        ...state,
        error: action.payload,
      };

    case "SET_TEMPERATURE_UNIT":
      return {
        ...state,
        temperatureUnit: action.payload,
      };

    default:
      return state;
  }
};

export default reducer;
