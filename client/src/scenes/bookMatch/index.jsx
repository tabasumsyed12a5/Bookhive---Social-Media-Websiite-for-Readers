import React, { useState } from "react";
import { Box, Typography, TextField, Button } from "@mui/material";
import Navbar from "scenes/navbar";

const BookMatch = () => {
  const [favoriteBook, setFavoriteBook] = useState("");
  const [recommendations, setRecommendations] = useState([]);
  const handleRecommend = async () => {
    try {
        const res = await fetch(
        `https://www.googleapis.com/books/v1/volumes?q=${encodeURIComponent(favoriteBook)}&maxResults=5`
        );
        const data = await res.json();
        const results = data.items?.map((item) => item.volumeInfo.title) || [];
        setRecommendations(results);
    } catch (err) {
        console.error("Error fetching recommendations:", err);
        setRecommendations(["Could not fetch recommendations. Try again later."]);
  }
};


  return (
      <>
    <Navbar />
    <Box p={4}>
      <Typography variant="h4">📚 Find Your Next Read</Typography>
      <TextField
        fullWidth
        label="Enter a book or author you love"
        value={favoriteBook}
        onChange={(e) => setFavoriteBook(e.target.value)}
        sx={{ my: 2 }}
      />
      <Button variant="contained" onClick={handleRecommend}>Recommend</Button>

      {recommendations.length > 0 && (
        <Box mt={4}>
          <Typography variant="h6">Recommendations:</Typography>
          <ul>
            {recommendations.map((rec, i) => (
              <li key={i}>{rec}</li>
            ))}
          </ul>
        </Box>
      )}
    </Box>
    </>
  );
};

export default BookMatch;
