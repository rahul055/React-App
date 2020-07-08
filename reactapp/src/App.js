import React, { useState } from 'react';
import './App.css';
import Input from './userinput/userinput';
import Output from './useroutput/useroutput';
import Persones from './persones/persones';
import persones from './persones/persones';

class App extends React.Component {
  state = {
    username: 'Rahul',
    isuser: false,
    persone: [
      { id: '01', name: 'Rahul', age: 24 },
      { id: '02', name: 'Rajshree', age: 26 },
      { id: '03', name: 'Sushil', age: 28 }

    ]
  }

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
  DeletepersoneHandler = (PersoneIndex) => {
    const persones = this.state.persone;
    persones.splice(PersoneIndex, 1);
    this.setState({ persone: persones })
  }

  render() {

    // functions...

    this.btnstyle = {
      backgroundColor: 'orange',
      border: '1px solid red',
      padding: '5px',
      width: '150px',
      fontSize: '20px',
      fontWeight: '900',
      letterSpacing: '2.5px'
    }


    let user = null;

    if (this.state.isuser) {
      this.user = (
        <div>
          <Input change={this.userstateHandler} name={this.state.username} />
          <Output userName={this.state.username} />
          {this.state.persone.map((person, Index) => {
            return <Persones click={() => this.DeletepersoneHandler(Index)}
              id={person.id}
              name={person.name}
              age={person.age} />
          })}

        </div>)
    } else {
      this.user = null;
    }

    // Return statement...

    return (
      <div className="App" >
        <header className="App-header">
          {this.user}
          <button onClick={this.ToggleuserHandler} style={this.btnstyle}>Toggle</button>

        </header>
      </div>
    );
  }
}

export default App;
