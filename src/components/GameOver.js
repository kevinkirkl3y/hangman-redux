import React from 'react';
import gameOverImg from './img/GameOver.png';

function GameOver(props) {
  // let currentDisplay = null;
  // const gameOver = props.mistake >= 6 || props.answer
  //   if(gameOver) {
  //     currentDisplay = 'Play Again?';
  //   }
    
  return (
    <>
      <div className='container'>
        <img src={ gameOverImg } />
        <h4>Answer:{ props.answer }</h4>
        <button onClick={() => window.location.reload()}>Play Again?</button> 
      </div>
    </>
  );
}

export default GameOver;