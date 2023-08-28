import React from 'react';

const renderStars = (rating) => {
  const numberOfStars = 5;
  const fullStars = Math.floor(rating);
  const hasHalfStar = rating % 1 >= 0.5;

  const stars = [];

  for (let i = 0; i < fullStars; i++) {
    stars.push(<StarIcon key={i} />);
  }

  if (hasHalfStar) {
    stars.push(<StarHalfIcon key={fullStars} />);
  }

  const emptyStars = numberOfStars - fullStars - (hasHalfStar ? 1 : 0);

  for (let i = 0; i < emptyStars; i++) {
    stars.push(<StarBorderIcon key={fullStars + i + (hasHalfStar ? 1 : 0)} />);
  }

  return stars;
};

export default renderStars;