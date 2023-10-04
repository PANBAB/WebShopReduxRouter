import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import {
  Typography,
  TextField,
  Button,
  List,
  ListItem,
  ListItemText,
  IconButton,
} from "@mui/material";
import AddCommentRoundedIcon from "@mui/icons-material/AddCommentRounded";
import DeleteOutlineRoundedIcon from "@mui/icons-material/DeleteOutlineRounded";

const ExerciseRollerReview = ({ productId }) => {
  const [reviews, setReviews] = useState([]);
  const [newReview, setNewReview] = useState("");

  useEffect(() => {
    const storedReviews = JSON.parse(sessionStorage.getItem(productId));
    if (storedReviews) {
      setReviews(storedReviews);
    }
  }, [productId]);

  const handleNewReviewChange = (event) => {
    setNewReview(event.target.value);
  };

  const handleAddReview = () => {
    const newReviews = [...reviews, newReview];
    setReviews(newReviews);
    setNewReview("");
    sessionStorage.setItem(productId, JSON.stringify(newReviews));
  };

  const handleDeleteReview = (index) => {
    const newReviews = [...reviews];
    newReviews.splice(index, 1);
    setReviews(newReviews);
    sessionStorage.setItem(productId, JSON.stringify(newReviews));
  };

  const reviewItems = [];
  if (reviews.length > 0) {
    for (let i = 0; i < reviews.length; i++) {
      const review = reviews[i];
      reviewItems.push(
        <ListItem key={i}>
          <ListItemText primary={review} />
          <IconButton aria-label="delete" onClick={() => handleDeleteReview(i)}>
            <DeleteOutlineRoundedIcon color="secondary" />
          </IconButton>
        </ListItem>
      );
    }
  }

  return (
    <div>
      <Typography variant="h1" component="h2" gutterBottom>
        Exercise Roller Review
      </Typography>

      <AddCommentRoundedIcon color="primary" />
      <TextField
        label="Rollin, rollin, rollin..."
        value={newReview}
        onChange={handleNewReviewChange}
        margin="dense"
        variant="outlined"
        fullWidth
        multiline
        rowsMax={4}
      />

      <Button variant="contained" color="primary" onClick={handleAddReview}>
        Add Review
      </Button>
      <Button
        variant="contained"
        color="secondary"
        component={Link}
        to="/products"
      >
        Back to products
      </Button>
      {reviews.length > 0 && <List>{reviewItems}</List>}
    </div>
  );
};

export default ExerciseRollerReview;
