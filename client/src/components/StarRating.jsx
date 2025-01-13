import React from "react";

function StarRating({ rating }) {
  const stars = [];

  for (let i = 1; i <= 5; i++) {
    if (i <= rating) {
      // full star
      stars.push(<i key={i} className="fas fa-star text-warning"></i>);
    }
    // 2,3 => 3; 3,5=> 4 AND number is decimal
    else if (i === Math.ceil(rating) && !Number.isInteger(rating)) {
      // half empty star
      stars.push(<i key={i} className="fas fa-star-half-alt text-warning"></i>);
    } else {
      // empty star
      stars.push(<i key={i} className="far fa-star text-warning"></i>);
    }
  }

  return <>{stars}</>;
}

export default StarRating;
