import React, { useState } from 'react';
import './App.css';
import Input from './userinput/userinput';
import Output from './useroutput/useroutput';

class App extends React.Component {
  state = {
    username: 'Rahul',
    isuser: false,
  }


  render() {

    // functions...

    userstateHandler = (event) => {
      this.setState({
        username: event.target.value,
      })
    }

    ToggleuserHandler = () => {
      let douser = this.state.isuser;
      this.setState({
        isuser: !douser,
      })
    }

    let user = null;

    if (this.state.isuser) {
      this.user =
        <div>
          <Input change={this.userstateHandler} name={this.state.username} />
          <Output userName={this.state.username} />
        </div>
    } else {
      this.user = null;
    }

    // Return statement...

    return (
      <div className="App" >
        <header className="App-header">
          {this.user}
          <button onClick={this.ToggleuserHandler} >Toggle</button>

        </header>
      </div>
    );
  }
}

export default App;
