import React, { useState } from "react";
import { Link } from "react-router-dom";
import {
  Typography,
  TextField,
  Button,
  List,
  ListItem,
  ListItemText,
} from "@mui/material";

const ExerciseBikeReview = ({ productId }) => {
  const [reviews, setReviews] = useState([]);
  const [newReview, setNewReview] = useState("");

  const handleNewReviewChange = (event) => {
    setNewReview(event.target.value);
  };

  const handleAddReview = () => {
    const newReviews = [...reviews, newReview];
    setReviews(newReviews);
    setNewReview("");
  };

  return (
    <div>
      <Typography variant="h4" component="h2" gutterBottom>
        Reviews
      </Typography>
      <List>
        {reviews.map((review, index) => (
          <ListItem key={index}>
            <ListItemText primary={review} />
          </ListItem>
        ))}
      </List>
      <TextField
        label="Add a review"
        value={newReview}
        onChange={handleNewReviewChange}
        margin="normal"
        variant="outlined"
        fullWidth
        multiline
        rowsMax={4}
      />
      <Button variant="contained" color="primary" onClick={handleAddReview}>
        Add Review
      </Button>
      <Button variant="outlined" component={Link} to="/products">
        Back to products
      </Button>
    </div>
  );
};

export default ExerciseBikeReview;
