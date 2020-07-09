import React, { useState } from 'react';
import './App.css';
import Input from './userinput/userinput';
import Output from './useroutput/useroutput';
import Persones from './persones/persones';
import persones from './persones/persones';
import Calculator from './CalculatorApp/Calculator';
import Calcresult from './CalculatorApp/calcresult';

class App extends React.Component {
  state = {
    username: '',
    text: '',
    isuser: false,
    calcNo: '',
    iscalc: false,
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
    let notcalc = this.state.iscalc;
    this.setState({
      isuser: !douser,
      iscalc: !notcalc,
    })
  }

  DeletepersoneHandler = (PersoneIndex) => {
    // const persones = this.state.persone;
    const persones = [...this.state.persone]
    persones.splice(PersoneIndex, 1);
    this.setState({ persone: persones })
  }


  changenameHandler = (event, id) => {
    const personeIndex = this.state.persone.findIndex(p => {
      return p.id === id
    })
    const person = {
      ...this.state.persone[personeIndex]
    };
    person.name = event.target.value;

    const persons = [...this.state.persone];

    persons[personeIndex] = person;
    this.setState({
      persone: persons
    })
  }



  render() {

    // functions...

    const btnstyle = {
      backgroundColor: 'orange',
      border: '1px solid red',
      padding: '5px',
      width: '150px',
      fontSize: '20px',
      fontWeight: '900',
      letterSpacing: '2.5px',
      marginTop: '10px'
    }

    this.keypress = (e) => {
      if (e.keyCode == 13) {
        console.log('value', e.target.value);
        this.setState({
          calcNo: eval(this.state.calcNo),
        })

      }
    }


    let user = null;
    let showcalc = null;
    if (this.state.isuser) {
      this.user = (
        <div>
          <Input change={this.userstateHandler} name={this.state.username} />
          <Output userName={this.state.username} />
          {this.state.persone.map((person, Index) => {
            return <Persones click={() => this.DeletepersoneHandler(Index)}
              key={person.id}
              change={(event) => this.changenameHandler(event, person.id)}
              name={person.name}
              age={person.age} />
          })}



        </div>)

    } else {
      this.user = null;
      showcalc = (
        <div>
          <Calculator click={ev => this.setState({ calcNo: ev.target.value })} keypress={this.keypress} />
          <Calcresult opvalue={this.state.calcNo} />
        </div>
      );

    }

    // Return statement...

    return (
      <div className="App" >
        <header className="App-header">
          {this.user}
          <button onClick={this.ToggleuserHandler} style={btnstyle}>Toggle</button>

          {showcalc}
        </header>
      </div>
    );
  }
}

export default App;
