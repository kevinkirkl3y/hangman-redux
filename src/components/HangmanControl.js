import React, { Component } from 'react';
import Characters from './Characters';
import Word from './Word';
import AnswerField from './AnswerField';
import Hangman from './Hangman';
import GameOver from './GameOver';


class HangmanControl extends Component {
  constructor(props) {
    super(props);
    this.state = {
      currentlyVisibleState: null,
      currentWord: Word(),
      guessed: [],
      mistake: 0,
      gameOver: false
    }
  }
  
  // HANDLERS
  handleGuess = e => {
    let letter = e.target.value;
    this.setState(st => ({
      guessed: [...this.state.guessed, letter],
      mistake: st.mistake + (st.currentWord.includes(letter) ? 0 : 1)
      // gameOver: ...
    })) 
  }

  


  render() {
    //CONDITIONAL RENDERING
    let currentlyVisibleState = null;
    if(this.state.mistake >= 6 || (this.state.guessed.includes(" _ "))){
        currentlyVisibleState = 
        <GameOver 
        answer={this.state.currentWord}
        />;
    } else {
      currentlyVisibleState= 
      <AnswerField 
      answer={this.state.currentWord} 
      guess={this.state.guessed}
      />;
    }
    
    return(
      <>
        <div className='container'>
          <Hangman numOfMistakes = {this.state.mistake}/>
        </div>
        {currentlyVisibleState}
        <hr />
        <Characters onGuess={this.handleGuess} guess={this.state.guessed}/>
        {/* <GameOver answer={this.state.currentWord} mistake={this.state.mistake}/> */}
        {console.log(this.state.currentWord)}
        {console.log(this.state.guessed)}
        {console.log(this.state.mistake)}
      </>
    )
  }
}

export default HangmanControl;