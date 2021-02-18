import React from 'react';
//import PropTypes from 'prop-types';


const space = {
  whiteSpace: 'pre'
}

function AnswerField(props) {
  const currentGuessArray = props.answer.split("").map(letter => {
    if (letter === " ") {
      return "   ";
    } else if (props.guess.includes(letter)) {
      return letter;
    } else {
      return " _ ";
    }})

    
    // let display = () => {
    //   if (props.gameStat != true) {
    //     <>      
    //       <h1 className="text-center " style={space}>
    //         {currentGuessArray.join("")}
    //       </h1>
    //     </>
    //   } else if (props.gameStat == true){
    //     <>
    //       <GameOver />
    //     </>
    //   }
    // }

  

  return (
    <>      
      <h1 className="text-center " style={space}>
        {currentGuessArray.join("")}
      </h1>
    </>
  );
}

export default AnswerField;