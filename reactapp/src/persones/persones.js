import React from 'react';

const persones = (props) => {
    let custstyle = {
        color: 'yellow'
    }
    return (
        <div>
            <h3>
                <span style={custstyle}>Id : {props.id}</span>   My name is : <span style={custstyle}>{props.name}</span> and age is :<span style={custstyle}>{props.age}</span>
            </h3>
        </div>
    )
}
export default persones;