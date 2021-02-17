import React from 'react';
//import PropTypes from 'prop-types';

function AnswerField(props) {
  // Variables and Conditions
  const display = props.answer.split("").map(letter => 
    props.guess.includes(letter) ? letter : " _ ")

  return (
    <>      
    {/* Conditional variables inside html */}
      <h3 className="text-center">
        {display.join("")}
      </h3>
    </>
  );
}

export default AnswerField;