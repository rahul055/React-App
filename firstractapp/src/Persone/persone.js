import React from 'react'

const Persone = (props) => {

    return (
        <div><h1> My name is {props.name} and my age is {props.age}</h1>
            <h2>{props.children}</h2>

        </div>

    )

}

export default Persone;