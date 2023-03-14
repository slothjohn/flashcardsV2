import React, { useState } from 'react';

function Flashcard({ front, back, isFlipped, setIsFlipped }) {
    
  const handleClick = () => {
    setIsFlipped(!isFlipped);
  };

  return (
    <div className={`card ${isFlipped ? 'flipped' : ''}`} onClick={handleClick}>
      <div className="front">{front}</div>
      <div className="back">{back}</div>
    </div>
  );
}

export default Flashcard;



