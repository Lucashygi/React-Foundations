import React from 'react';

export default (props) => {
    const { min, max } = props;
    const random = Math.floor(Math.random() * (max - min + 1) + min);
    return (
        <div>
            <h2>Random value:</h2>
            <p>Minimal value: {min}</p>
            <p>Maximal value: {max}</p>
            <p>Randomized value: {random}</p>
        </div>
    )
}
