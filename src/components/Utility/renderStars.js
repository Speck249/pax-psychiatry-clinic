import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faStar, faStarHalfAlt} from '@fortawesome/free-solid-svg-icons';

export const renderStars = (rating) => {
  /*const numberOfStars = 5;*/
  const fullStars = Math.floor(rating);
  const hasHalfStar = rating % 1 >= 0.5;

  const stars = [];

  for (let i = 0; i < fullStars; i++) {
    stars.push(<FontAwesomeIcon key={i} icon={faStar} className='golden-star'/>);
  }

  if (hasHalfStar) {
    stars.push(<FontAwesomeIcon key={fullStars} icon={faStarHalfAlt} className='golden-star'/>);
  }

  /*const emptyStars = numberOfStars - fullStars - (hasHalfStar ? 1 : 0);*/

  return stars;
};