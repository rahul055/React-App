import React from 'react';

const result = (props) => {
    return (
        <div>
            <input type='text' value={props.opvalue} placeholder='Answer' disabled />
        </div>
    )
}
export default result;