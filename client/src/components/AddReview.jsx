import React, { useState } from "react";
import RestaurantFinder from "../apis/RestaurantFinder";
import { useLocation, useNavigate, useParams } from "react-router-dom";

function AddReview({ newReview, setNewReview }) {
  const [name, setName] = useState("");
  const [reviewText, setReviewText] = useState("");
  const [rating, setRating] = useState("");

  const navigate = useNavigate();
  // const history = useHistory()
  const location = useLocation();
  console.log(location);

  const { id } = useParams();
  console.log(id);

  const handleSubmitReview = async (e) => {
    // e.preventDefault();
    try {
      // POST localhost/api/v1/restaurants/:id/addReview
      const response = await RestaurantFinder.post(`/${id}/addReview`, {
        name: name,
        review: reviewText,
        rating: rating,
      });
      setNewReview(!newReview);
      // window.location.reload();
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <div className="mb-2">
      <form className="">
        <div className="form-row">
          {/* Name */}
          <div className="form-group col-8">
            <label htmlFor="name">Name</label>
            <input
              type="text"
              value={name}
              onChange={(e) => setName(e.target.value)}
              id="name"
              placeholder="Name"
              className="form-control"
            />
          </div>
          {/* Rating */}
          <div className="form-group col-4">
            <label htmlFor="name">Rating</label>
            <select
              id="rating"
              placeholder="Rating"
              className="custom-select"
              value={rating}
              onChange={(e) => setRating(e.target.value)}
            >
              <option disabled>Rating</option>
              <option value="1">1</option>
              <option value="2">2</option>
              <option value="3">3</option>
              <option value="4">4</option>
              <option value="5">5</option>
            </select>
          </div>
        </div>
        {/* Review */}
        <div className="form-group">
          <label htmlFor="name">Review</label>
          <textarea
            value={reviewText}
            onChange={(e) => setReviewText(e.target.value)}
            id="review"
            placeholder="Review"
            className="form-control"
          />
        </div>
        <button
          type="submit"
          onClick={handleSubmitReview}
          className="btn btn-primary"
        >
          Submit
        </button>
      </form>
    </div>
  );
}

export default AddReview;
