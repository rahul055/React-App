import React from 'react';

const persones = (props) => {
    let custstyle = {
        color: 'yellow'
    }
    const style = {
        fontSize: '18px',
        margin: '8px',
        padding: '5px',
        fontWeight: 'bolder',
        backgroundColor: 'skyblue'
    }
    return (
        <div>
            <h3 onClick={props.click}>
                <span style={custstyle}>Id : {props.id}</span>  I am : <span style={custstyle}>{props.name}</span> and my age is : <span style={custstyle}>{props.age}</span>

            </h3>
            <input type='text' style={style} onChange={props.change} value={props.name} />
        </div>
    )
}
export default persones;