import React from 'react';


const calculator = (props) => {
    const style = {
        marginTop: '50px',
        width: '200px',
        height: '30px',

    }
    return (
        <div>
            <input style={style} type='text' onChange={props.click} onKeyUp={props.keypress} placeholder='Calculate Numbers Here' />
        </div>
    )
}
export default calculator;