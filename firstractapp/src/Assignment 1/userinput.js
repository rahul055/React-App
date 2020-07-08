import React from 'react';
import './userrinput.css'
const Input = (props) => {
    return (<div>
        <input type='text' className="input" onChange={props.change} value={props.name} />
    </div>);
}
export default Input;