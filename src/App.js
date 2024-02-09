// App.js
// Relative imports
import React from "react";
import { useSelector } from "react-redux";
import Container from "@mui/material/Container";
import Typography from "@mui/material/Typography";
import CssBaseline from "@mui/material/CssBaseline";
import Box from "@mui/material/Box";
import Alert from "@mui/material/Alert";
import Stack from "@mui/material/Stack";
// Absolute imports
import RecentSearches from "./Components/RecentSearches";
import WeatherDisplay from "./Components/WeatherDisplay";
import SearchBar from "./Components/SearchBar";
import "./App.css";

const App = () => {
  const recentSearches = useSelector((state) => state.recentSearches);
  const error = useSelector((state) => state.error);

  return (
    <Stack className="weather_details">
      <Container
        component="main"
        maxWidth="md"
        className="weather_inner_details"
      >
        <CssBaseline />
        <Box elevation={3} sx={{ padding: "20px", marginTop: "20px" }}>
          <Typography variant="h4" align="center" gutterBottom>
            Weather App
          </Typography>
          <SearchBar />
          {/* Error Handling  */}
          {error ? (
            <Alert sx={{ mt: 2 }} severity="error">
              {error}
            </Alert>
          ) : (
            <></>
          )}
          <WeatherDisplay />
          {recentSearches?.length > 0 ? (
            <RecentSearches recentSearches={recentSearches} />
          ) : (
            <></>
          )}
        </Box>
      </Container>
    </Stack>
  );
};

export default App;
