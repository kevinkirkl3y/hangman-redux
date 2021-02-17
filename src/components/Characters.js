import React from 'react';
import PropTypes from 'prop-types';

const letterStyle = {
  fontFamily: 'sans-serif',
  textAlign: "center"
}

const digit = {
  cursor: 'pointer',
  display: 'inline-block',
  padding: '2px',
  textTransform: 'uppercase',
  fontSize: '40px'
}

const letters = 'abcdefghijklmnopqrstuvwxyz'.split('')

function Characters(props) {



  return (
    <>
      <div style={letterStyle}>
        <ul>
          {letters.map(letter => (
            <li
              key= {letter}
              style= {digit}
              // onClick={props.onClick}
            >
              {letter} 
            </li>
          ))}
        </ul>
      </div>
        
    </>
  );
}

export default Characters;