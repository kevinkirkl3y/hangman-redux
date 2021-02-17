import React from 'react';
import Characters from './Characters';

class HangmanControl extends React.Component {
  constructor(props) {
    super(props);
    this.state = {

      //local state
      
      // guesses: ,
      // correctGuess: ,
      // wrongGuess: ,
      // newGame: ,
      
      // app state || redux
      // masterWordList: [...initial state],
      // currentWord: this.props
    }
  }
  // HANDLERS



  render() {
    //CONDITIONAL RENDERING
    
    return(
      <>
        <Characters />
        {/* {currentGameState} || newgame or gameover*/}
        {/* <Gallows /> */}
        {/* <Letters /> */}
        {/* <LetterBank /> */}
        
      </>
    )
  }
}

export default HangmanControl;