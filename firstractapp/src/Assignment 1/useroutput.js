import React from 'react';

const Output = (props) => {
    const style = {
        fontSize: '24px',
        marginTop: '20px',

    }
    return (<div style={style}>
        <p >UserName:{props.userName}</p>
        <p></p>
    </div>);
}
export default Output;