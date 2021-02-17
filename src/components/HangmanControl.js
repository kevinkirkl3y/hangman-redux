import React, { Component } from 'react';
import Characters from './Characters';
import Word from './Word'
import AnswerField from './AnswerField';
import step0 from './img/0.jpg';
import step1 from './img/1.jpg';
import step2 from './img/2.jpg';
import step3 from './img/3.jpg';
import step4 from './img/4.jpg';
import step5 from './img/5.jpg';
import step6 from './img/6.jpg';

class HangmanControl extends Component {
  constructor(props) {
    super(props);
    this.state = {
      currentWord: Word(),
      guessed: [],
      mistake: 0
      //local state
      
      // guesses: ,
      // correctGuess: ,
      // wrongGuess: ,
      // newGame: ,
      
      // app state || redux
      // masterWordList: [...initial state],
    }
  }
  
  // HANDLERS
  handleGuess = e => {
    let letter = e.target.value;
    this.setState(st => ({
      guessed: [...this.state.guessed, letter],
      mistake: st.mistake + (st.currentWord.includes(letter) ? 0 : 1)
    })) 
  }


  render() {
    //CONDITIONAL RENDERING
    
    return(
      <>
        <AnswerField answer={this.state.currentWord} guess={this.state.guessed}/>
        <Characters onGuess={this.handleGuess} guess={this.state.guessed}/>
        {console.log(this.state.guessed)}
        {console.log(this.state.mistake)}
      </>
    )
  }
}

export default HangmanControl;