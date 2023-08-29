import React from 'react';

const Stars = ({ count }) => {
  const renderStars = () => {
    const stars = [];

    for (let i = 0; i < count; i++) {
      stars.push(<span key={i} className="star"></span>);
    }

    return stars;
  };

  return <div className="stars">{renderStars()}</div>;
};

export default Stars;