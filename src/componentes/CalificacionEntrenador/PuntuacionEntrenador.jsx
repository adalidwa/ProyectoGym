import React, { useState } from 'react';
import './PuntuacionEntrenador.css';

const RatingComponent = () => {
  const [rating, setRating] = useState(0);
  const [comment, setComment] = useState('');
  const [suggestion, setSuggestion] = useState('');

  const handleClick = (value) => {
    setRating(value);
  };

  const handleCommentChange = (event) => {
    setComment(event.target.value);
  };

  const handleSuggestionChange = (event) => {
    setSuggestion(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log('Rating:', rating);
    console.log('Comment:', comment);
    console.log('Suggestion:', suggestion);
  
  };

  return (
    <div className="rating-component">
      <div className="rating-stars">
        {[1, 2, 3, 4, 5].map((value) => (
          <span
            key={value}
            className={`rating-star ${rating >= value ? 'active' : ''}`}
            onClick={() => handleClick(value)}
          >
            ★
          </span>
        ))}
      </div>

      <div className="rating-question">¿Cómo calificarías a tu entrenad@r?</div>

      <div className="rating-comment-box">
        <textarea
          value={comment}
          onChange={handleCommentChange}
          placeholder="✍️Deja tu comentario aquí..."
        />
      </div>

      <div className="rating-suggestion-box">
        <textarea
          value={suggestion}
          onChange={handleSuggestionChange}
          placeholder="✍️¿Alguna sugerencia para mejorar?"
        />
      </div>

      <button className="rating-submit-button" onClick={handleSubmit}>
        Enviar🏋️‍♀️
      </button>
    </div>
  );
};

export default RatingComponent;
