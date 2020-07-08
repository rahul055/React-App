import React, { useState } from 'react';
import './App.css';
import Persone from './Persone/persone';
import Input from './Assignment 1/userinput';
import Output from './Assignment 1/useroutput';

const App = (props) => {
  const [stateArr, setpersone] = useState({
    persones: [
      { name: 'Rahul', age: 24 },
      { name: 'Sushil', age: 28 },
      { name: 'Ashwini', age: 23 },
    ],

  })


  const changepersoneState = () => {
    setpersone(
      {
        persones: [
          { name: 'Sushil', age: 28 },
          { name: 'Rajshree', age: 26 },
          { name: 'Rahul', age: 24 },
        ]

      }
    )
  }


  let person = null;



  const [mystate, setState] = useState({
    userop: {
      name: 'rrjoshi055',
    },
  })

  const changestate = (event) => {
    setState({
      userop: {
        name: event.target.value,
      },
    })

  }

  //return function

  return (
    <div className='app'>

      <div>
        <Persone name={stateArr.persones[0].name} age={stateArr.persones[0].age} />
        <Persone
          name={stateArr.persones[1].name}
          age={stateArr.persones[1].age}>
          My hobbie is : coding
        </Persone>
        <Persone name={stateArr.persones[2].name} age={stateArr.persones[2].age} />

      </div>
      <button className='btn' onClick={changepersoneState} >ChangeState</button>
      <div>
        <h1 >Two Way Binding using React <strong>Event</strong> parameter</h1>
        <Input name={mystate.userop.name} change={changestate} />
        <Output userName={mystate.userop.name} />
        <Output userName='Rahul' />
      </div>

    </div>
  );
}

export default App;
