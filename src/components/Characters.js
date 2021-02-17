import React from 'react';
import PropTypes from 'prop-types';

const letterStyle = {
  fontFamily: 'sans-serif',
  textAlign: "center"
}

const digit = {
  cursor: 'pointer',
  display: 'inline-block',
  padding: '5px',
  textTransform: 'uppercase',
  fontSize: '40px'
}

const letters = 'abcdefghijklmnopqrstuvwxyz'.split('')

function Characters(props) {

  return (
    <>
      <div style={letterStyle}>
        {letters.map(letter => (
          <button
            key= {letter}
            style= {digit}
            value={letter}
            className='btn btn-lrg btn-info m-2'
            onClick={props.onGuess} //we can adjust to meet our naming
            disabled={props.guess.includes(letter)} //we can adjust to meet our naming
          >
            {letter} 
          </button>
        ))}
      </div>
        
    </>
  );
}

export default Characters;