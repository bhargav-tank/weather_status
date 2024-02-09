// WeatherDisplay.js
// Relative imports
import React from "react";
import { useSelector, useDispatch } from "react-redux";
import Typography from "@mui/material/Typography";
import Paper from "@mui/material/Paper";
import Switch from "@mui/material/Switch";
import FormControlLabel from "@mui/material/FormControlLabel";
// Absolute imports
import { setTemperatureUnit } from "../Store/actions";

const WeatherDisplay = () => {
  const weatherData = useSelector((state) => state.weatherData);
  const temperatureUnit = useSelector((state) => state.temperatureUnit);
  const dispatch = useDispatch();

  const handleUnitToggle = () => {
    // Dispatch  action to toggle the temperature
    dispatch(
      setTemperatureUnit(
        temperatureUnit === "Celsius" ? "Fahrenheit" : "Celsius"
      )
    );
  };

  const convertTemperature = (temperature) => {
    // Convert  temperature
    if (temperatureUnit === "Celsius") {
      return temperature.toFixed(2);
    } else if (temperatureUnit === "Fahrenheit") {
      return (temperature * 1.8 + 32).toFixed(2);
    }
    return temperature.toFixed(2);
  };

  return (
    <>
      {weatherData ? (
        <Paper elevation={3} sx={{ padding: "20px", marginTop: "20px" }}>
          <div>
            <Typography variant="h6" gutterBottom>
              {weatherData.city}
            </Typography>
            <Typography variant="body1">
              Temperature: {convertTemperature(weatherData.temperature)}{" "}
              {temperatureUnit}
            </Typography>
            <Typography variant="body1">
              Weather Conditions: {weatherData.weatherConditions}
            </Typography>
            <Typography variant="body1">
              Wind Speed: {weatherData.windSpeed} m/s
            </Typography>

            {/* Temperature  Toggle Switch */}
            <FormControlLabel
              control={
                <Switch
                  checked={temperatureUnit === "Fahrenheit"}
                  onChange={handleUnitToggle}
                />
              }
              label="Fahrenheit"
            />
          </div>
        </Paper>
      ) : (
        <></>
      )}
    </>
  );
};

export default WeatherDisplay;
