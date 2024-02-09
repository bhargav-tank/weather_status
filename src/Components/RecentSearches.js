// RecentSearches.js
import React from "react";
import { useSelector } from "react-redux";
import Paper from "@mui/material/Paper";
import Typography from "@mui/material/Typography";

const RecentSearches = () => {
  const recentSearches = useSelector((state) => state.recentSearches);

  return (
    <Paper elevation={3} sx={{ padding: "20px", marginTop: "20px" }}>
      <Typography variant="h6" gutterBottom>
        Recent Searches
      </Typography>
      <ul>
        {recentSearches.map((search, index) => (
          <li key={index}>{search}</li>
        ))}
      </ul>
    </Paper>
  );
};

export default RecentSearches;
