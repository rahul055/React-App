import React, { useState } from 'react';
import './App.css';
import Validation from './validation/validation';
import Char from './char/char'
class App extends React.Component {

  state = {
    text: '',
  }

  namechangeHandler = (e) => {
    this.setState({
      text: e.target.value
    })
  }

  deleteCharHandler = (charIndex) => {
    const chars = this.state.text.split('');
    chars.splice(charIndex, 1);
    const updatedChar = chars.join('');
    this.setState({
      text: updatedChar
    });
  }

  render() {
    const charList = this.state.text.split('').map((ch, Index) => {
      return <Char charecter={ch} key={Index} click={() => this.deleteCharHandler(Index)} />
    })

    return (
      <div className='App-header'>

        <input type='text' onChange={this.namechangeHandler} value={this.state.text} />

        <p> {this.state.text} </p>

        <Validation inputLength={this.state.text.length} />
        {charList}
      </div>
    )
  }
}

export default App;
