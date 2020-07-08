import React from 'react';
const Input = (props) => {
    const style = {
        fontSize: '24px',
        margin: '8px',
        padding: '8px'
    }
    return (<div>
        <input type='text' style={style} onChange={props.change} value={props.name} placeholder='Enter some text' />
    </div>);
}
export default Input;