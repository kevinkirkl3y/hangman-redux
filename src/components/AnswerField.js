import React from 'react';
//import PropTypes from 'prop-types';
const space = {
  whiteSpace: 'pre'
}

function AnswerField(props) {
  
  const display = props.answer.split("").map(letter => {
    if (letter === " ") {
      return "   ";
    } else if (props.guess.includes(letter)) {
      return letter;
    } else {
      return " _ ";
    }})
  
  return (
    <>      
    {console.log(display)}
    {console.log(display.join(" "))}
      <h1 className="text-center " style={space}>
        {display.join("")}
      </h1>
    </>
  );
}

export default AnswerField;