import React, { Component } from 'react';
import Characters from './Characters';
import Word from './Word';
import AnswerField from './AnswerField';
import Hangman from './Hangman';


class HangmanControl extends Component {
  constructor(props) {
    super(props);
    this.state = {
      currentWord: Word(),
      guessed: [" "],
      mistake: 0
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
        <Hangman />
        {console.log(this.state.guessed)}
        {console.log(this.state.mistake)}
      </>
    )
  }
}

export default HangmanControl;