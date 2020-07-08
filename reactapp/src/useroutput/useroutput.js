import React from 'react';

const Output = (props) => {
    const style = {
        fontSize: '30px',
        marginTop: '20px',

    }
    return (<div >
        <p style={style}>UserName:  {props.userName}</p>

    </div>);
}
export default Output;