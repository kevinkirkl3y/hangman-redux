import React from 'react';
import step0 from './img/0.jpg';
import step1 from './img/1.jpg';
import step2 from './img/2.jpg';
import step3 from './img/3.jpg';
import step4 from './img/4.jpg';
import step5 from './img/5.jpg';
import step6 from './img/6.jpg';

function Hangman(props) {
  const images = [step0, step1, step2, step3, step4, step5, step6]
  
  return (
    <>
      <img  src={images[props.numOfMistakes]}alt='' />
    </>
  );
}

export default Hangman;