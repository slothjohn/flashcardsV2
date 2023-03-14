import './App.css';
import { useState } from 'react';
import FlashcardList from './FlashcardList';

const App = () => {

  const flashcards = [
    { id: 1, front: 'Cherry MX Red', back: 'Linear' },
    { id: 2, front: 'Cherry MX Blue', back: 'Clicky' },
    { id: 3, front: 'Cherry MX Brown', back: 'Tactile' },
    { id: 4, front: 'Gateron Yellow', back: 'Linear' },
    { id: 5, front: 'Gateron Ink', back: 'Linear' },
    { id: 6, front: 'Durock T1', back: 'Tactile' },
    { id: 7, front: 'C3 Tangerine', back: 'Linear' },
    { id: 8, front: 'Kailh Box Jade', back: 'Clicky' },
    { id: 9, front: 'Holy Pandas', back: 'Tactile' },
    { id: 10, front: 'NovelKeys Cream', back: 'Linear'}
  ];

  let explored = ["stop", "stop", 0];
  let index = explored.length - 1;

  return (
    <div className="App">
      <div className='header'>
        <h1>Name that switch type!</h1>
        <h3>Guess the type of switch: Linear, Tactile, Clicky</h3>
        <h4>Number of cards: {flashcards.length}</h4>

        <FlashcardList flashcards={flashcards} explore={explored} curIndex={index} />
        
      </div>
    </div>
  )
}

export default App