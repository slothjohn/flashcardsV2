import React, { useState } from 'react';
import Flashcard from './Flashcard';


function FlashcardList({ flashcards, explore, curIndex }) {
  const [currentCard, setCurrentCard] = useState(0);
  const [isFlipped, setIsFlipped] = useState(false);

  const [userInput, setUserInput] = useState('');
  const [result, setResult] = useState('');

  const handleNextCard = () => {
    let randomIndex = currentCard;
    while (randomIndex === currentCard) {
      randomIndex = Math.floor(Math.random() * flashcards.length);
    } 
    setCurrentCard(randomIndex);
    setIsFlipped(false);
    setUserInput("");
    setResult("");
    
    // if (curIndex == explore.length - 1) {
    //   curIndex += 1; //not updating
    //   let randomIndex = currentCard;
    //   while (randomIndex === currentCard) {
    //     randomIndex = Math.floor(Math.random() * flashcards.length);
    //   } 
    //   explore.push(randomIndex)
    //   setCurrentCard(randomIndex);
    //   setIsFlipped(false);
    // } else {
    //   setCurrentCard(explore[curIndex+1])
    //   setIsFlipped(false);
    // }
  };

  const handlePrevCard = () => {
    curIndex -= 1;
    if (explore[curIndex] != "stop") {
      setCurrentCard(explore[curIndex]);
      setIsFlipped(false);
      setUserInput("");
      setResult("");
    }
  };

  const handleCheckAnswer = () => {
    if(userInput === flashcards[currentCard].back) {
      setResult("Correct!");
    } else {
      setResult("Try again :(");
    }
  };
  

  return (
    <div>
      <Flashcard front={flashcards[currentCard].front} back={flashcards[currentCard].back} isFlipped={isFlipped} setIsFlipped={setIsFlipped} />
      <button onClick={handlePrevCard}>Prev</button>
      <button onClick={handleNextCard}>Next</button>
      <div>
        <input type="text" value={userInput} onChange={(e) => setUserInput(e.target.value)}/>
        <button onClick={handleCheckAnswer}>Check</button>
        <div>{result}</div>
      </div>
    </div>
  );
}

export default FlashcardList;
