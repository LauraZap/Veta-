import React from 'react';

const CardViews = ({ peliculas }) => {
  return (
    <div className="card-container">
      {peliculas.map((pelicula, index) => (
        <div key={index} className="card">
          <img src={pelicula.poster} alt={`${pelicula.titulo} poster`} />
          <div className="card-info">
            <h2>{pelicula.titulo}</h2>
            <p>{pelicula.sinopsis}</p>
          </div>
        </div>
      ))}
    </div>
  );
};

export default CardViews;
