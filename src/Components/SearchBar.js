// SearchBar.js
// relative imports
import React, { useState } from "react";
import { useDispatch } from "react-redux";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import Grid from "@mui/material/Grid";
import axios from "axios";

// Absolute imports
import { WeatherSTatus_ERROR } from "../constants";
import { ColorCode } from "../constants/color";
import { searchCity, setError, setWeatherData } from "../Store/actions";

const SearchBar = () => {
  const [city, setCity] = useState("");
  const dispatch = useDispatch();
  const api = {
    key: process.env.REACT_APP_OPENWEATHERMAP_API_KEY,
    base: "https://api.openweathermap.org/data/2.5/",
  };

  const handleSearch = async () => {
    if (city.trim() === "") {
      dispatch(setError(WeatherSTatus_ERROR.CITY_ERROR));
    } else {
      try {
        const response = await axios.get(
          `${api.base}weather?q=${city}&units=metric&APPID=${api.key}`
        );
        const weatherData = {
          city: response.data.name,
          temperature: response.data.main.temp,
          weatherConditions: response.data.weather[0].description,
          windSpeed: response.data.wind.speed,
        };
        dispatch(searchCity(city));
        dispatch(setWeatherData(weatherData));
        dispatch(setError(null));
      } catch (error) {
        dispatch(setError(WeatherSTatus_ERROR.CITY_NOT_FOUND));
        dispatch(setWeatherData(null));
      }
    }
  };

  const handleKeyPress = (e) => {
    if (e.key === "Enter") {
      handleSearch();
    }
  };

  return (
    <Grid container spacing={2} alignItems="center">
      <Grid item xs={12} sm={8}>
        <TextField
          fullWidth
          size="small"
          label="Enter city name"
          autoComplete={false}
          value={city}
          onChange={(e) => setCity(e.target.value)}
          onKeyDown={handleKeyPress} //  Enter key press
          sx={{ backgroundColor: ColorCode.WhiteSmoke_Color }}
        />
      </Grid>
      <Grid item xs={12} sm={4}>
        <Button
          fullWidth
          onClick={handleSearch}
          sx={{
            backgroundColor: ColorCode.Dodger_Blue,
            color: ColorCode.White,
          }}
        >
          Search
        </Button>
      </Grid>
    </Grid>
  );
};

export default SearchBar;
