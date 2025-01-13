import React from "react";

function StarRating({ rating }) {
  const stars = [];

  for (let i = 1; i <= 5; i++) {
    if (i <= rating) {
      // full star
      stars.push(<i className="fas fa-star"></i>);
    }
    // 2,3 => 3; 3,5=> 4 AND number is decimal
    else if (i === Math.ceil(rating) && !Number.isInteger(rating)) {
      // half empty star
      stars.push(<i className="fas fa-star-half-alt"></i>);
    } else {
      // empty star
      stars.push(<i className="far fa-star"></i>);
    }
  }

  return (
    <>
      {stars} ({rating})
    </>
  );
}

export default StarRating;
