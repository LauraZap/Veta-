import React from 'react';

const ReviewsPeliculas = ({ reviews }) => {
  return (
    <div className="reviews-container">
      <h1>Reseñas de Películas:</h1>
      {reviews.map((review, index) => (
        <div key={index} className="review-card">
          <h3>{review.titulo}</h3>
          <p>{review.comentario}</p>
          <p><strong>Calificación:</strong> {review.calificacion}/10</p>
        </div>
      ))}
    </div>
  );
};

export default ReviewsPeliculas;
